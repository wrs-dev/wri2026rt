# Handoff: Animated Masthead (GSAP) — WRI 2027

**Status:** designed and compiled once against the WRI **2026 RT** repo, then fully reverted. Nothing was kept. This document is the complete spec so the work can be redone in the correct (2027) repo.

**What was never done:** the animation was never visually confirmed. The browser extension was not connected during the original session, so it was verified only to the level of "compiles, serves HTTP 200, no console/build errors." **Treat the visual result as unverified.** Budget time to look at it and tune.

---

## 1. The goal

Replace the current masthead with a three-row animated lockup:

```
[ masthead-top.png    ]   <- wordmark, e.g. "WRI2027RT"    (image)
[ RAIL TRANSIT        ]   <- rotating line                 (HTML text)
[ 32nd Annual Wheel Rail Interaction Conference ]  (image)
```

Sequence:

1. Open closed: the wordmark sits directly on the bottom line, middle row collapsed.
2. The wordmark **rises**, opening the gap for the middle row.
3. "Rail Transit" fades in → out
4. "[City]" fades in → out
5. "[Dates]" fades in → out
6. "Rail Transit" fades back in and **stays**.

The middle row must be **real HTML text in Montserrat ExtraBold**, not an image.

---

## 2. Verify these assumptions first

The 2027 repo is presumably descended from the 2026 one, so the paths below probably match — but confirm before editing. Run:

```bash
# Is GSAP already a dependency? (it was in 2026: ^3.12.5, already in node_modules)
node -e "console.log(require('./package.json').dependencies.gsap)"
ls node_modules/gsap/package.json

# Where does the masthead currently render?
grep -rn "components/header" src
cat src/components/header/index.js
ls src/components/animations

# Is Montserrat ExtraBold self-hosted at weight 800?
grep -n "Montserrat" -A6 src/styles/fonts.css
ls public/fonts/montserrat

# Strict mode on? (it was in 2026 — this matters, see Gotchas)
grep -n "reactStrictMode" next.config.js
```

**What was true in the 2026 repo:**

- `gsap@3.12.5` was already in `package.json` **and** installed in `node_modules`. **No `npm install` was needed.** Check before installing.
- The masthead was a **Rive animation**, not static: `src/components/Layout.js` → `src/components/header/index.js` → `src/components/animations/anim2025RT.js` → `/wri2026RT_header.riv`. It renders inside `Layout`, so it is on **every page**.
- Montserrat ExtraBold was self-hosted at weight 800 in `src/styles/fonts.css` (`/fonts/montserrat/montserrat-extrabold.ttf`). No new font loading required.
- `next.config.js` had `reactStrictMode: true` and `output: 'export'`.
- Tailwind defined `wri-blue` as `#0967D2` — that is the middle row's colour.
- The old Rive container was `max-w-[1000px]`; the new component matches that width.

---

## 3. Assets required from the user

Two PNGs in `public/`:

| File | Content |
|---|---|
| `public/masthead-top.png` | The wordmark, e.g. `WRI2027RT` |
| `public/masthead-bottom.png` | The line, e.g. `32nd Annual Wheel Rail Interaction Conference` |

**In the original session these files did not exist.** The user believed they had added them; a repo-wide `find -iname "*masthead*"` and a clean `git status` proved otherwise. **Check for them before assuming they are present:**

```bash
ls -la public/masthead-top.png public/masthead-bottom.png
node -e "const s=require('sharp');(async()=>{for(const f of ['public/masthead-top.png','public/masthead-bottom.png']){const m=await s(f).metadata();console.log(f,m.width+'x'+m.height,'alpha:'+m.hasAlpha)}})()"
```

Both should be transparent PNGs of the **same pixel width** so they align when scaled to `width: 100%`. Trim excess transparent padding — the "closed lockup" start position measures real box edges, so baked-in padding makes the closed state look loose.

If the assets are missing and you want to see motion immediately, generate throwaway placeholders (this is what was done before) — **but tell the user they are placeholders and must be overwritten, and do not commit them:**

```bash
node -e "
const sharp=require('sharp');
const top=\`<svg xmlns='http://www.w3.org/2000/svg' width='940' height='96'><text x='470' y='76' font-family='Helvetica,Arial' font-size='86' font-weight='bold' text-anchor='middle' fill='#000'>WRI2027RT</text></svg>\`;
const bot=\`<svg xmlns='http://www.w3.org/2000/svg' width='940' height='40'><text x='470' y='31' font-family='Georgia,serif' font-size='34' text-anchor='middle' fill='#000'>32nd Annual Wheel Rail Interaction Conference</text></svg>\`;
(async()=>{
await sharp(Buffer.from(top)).png().toFile('public/masthead-top.png');
await sharp(Buffer.from(bot)).png().toFile('public/masthead-bottom.png');
})()
"
```

(`sharp` was already a dependency in 2026.)

---

## 4. Open questions — confirm with the user before building

1. **RT or HH?** The user described the 2027 event as **Rail Transit, Toronto, August 31 – September 2, 2027**, but later typed `WRI2027HH`. Confirm which conference this repo is, and get the city/date strings verbatim.
2. **Anniversary number.** 2026 RT was the "31st Annual", so 2027 RT would be the 32nd — but RT and HH may number separately. Do not guess; it is baked into the bottom PNG anyway, so the user controls it.
3. **"One on top of another" — how literal?** The user's phrasing was: *"starts with 'WRI2027HH' and the bottom line one on top of one another. The 'WRI2027HH' animates up giving room for the second line."*
   - **Implemented reading (gap-closing):** the wordmark's bottom edge touches the subtitle's top edge; nothing overlaps; the middle row's space is simply closed. Both lines stay legible. This was chosen because literal superimposition is an illegible mash of black-on-black for the first quarter second.
   - **Literal reading (true overlap):** change `bottom.offsetTop - (top.offsetTop + top.offsetHeight)` to `bottom.offsetTop - top.offsetTop`. One line.
   - **This was flagged to the user and never answered.** Ask.

---

## 5. The component

Create `src/components/animations/masthead.js`. Adjust the default props for 2027.

```jsx
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Timing knobs, in seconds. Total runtime is roughly
// beat + rise + 4 fades + 3 dwells + 3 fade-outs.
const T = {
  beat: 0.25,     // pause on the closed lockup before it opens
  rise: 0.8,      // top line travelling up
  fadeIn: 0.35,
  dwell: 0.8,     // how long each phrase holds
  fadeOut: 0.35,
  overlap: 0.25,  // how early the first phrase starts, relative to the rise landing
};

const Masthead = ({
  topSrc = '/masthead-top.png',
  topAlt = 'WRI 2027 RT',
  bottomSrc = '/masthead-bottom.png',
  bottomAlt = '32nd Annual Wheel Rail Interaction Conference',
  // Index 0 is the resting phrase: it opens the sequence and returns to stay.
  phrases = ['Rail Transit', 'Toronto, ON', 'August 31 – September 2, 2027'],
}) => {
  const rootRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const phraseRefs = useRef([]);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!root || !top || !bottom) return;

    let cancelled = false;

    const ctx = gsap.context((self) => {
      const items = phraseRefs.current.filter(Boolean);
      if (!items.length) return;

      // Everything at rest, resting phrase showing. Used for reduced motion
      // and as the guaranteed end state.
      const settle = () => {
        gsap.set(root, { autoAlpha: 1 });
        gsap.set(top, { y: 0 });
        gsap.set(items, { autoAlpha: 0 });
        gsap.set(items[0], { autoAlpha: 1 });
      };

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        settle();
        return;
      }

      const build = () => {
        if (cancelled) return;

        // Close the gap the middle row occupies, so the top wordmark sits
        // directly on the bottom line. Measured rather than hard-coded so it
        // holds at every breakpoint.
        const gap = bottom.offsetTop - (top.offsetTop + top.offsetHeight);

        gsap.set(items, { autoAlpha: 0 });
        gsap.set(top, { y: gap });
        gsap.set(root, { autoAlpha: 1 });

        const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

        let at = T.beat;
        tl.to(top, { y: 0, duration: T.rise, ease: 'power3.out' }, at);
        at += T.rise - T.overlap;

        // Rail Transit -> city -> dates -> Rail Transit, which stays put.
        // Derived from the list so any number of phrases works.
        const order = [...items.keys(), 0];
        order.forEach((i, step) => {
          tl.to(items[i], { autoAlpha: 1, duration: T.fadeIn }, at);
          at += T.fadeIn + T.dwell;
          if (step < order.length - 1) {
            tl.to(items[i], { autoAlpha: 0, duration: T.fadeOut }, at);
            at += T.fadeOut;
          }
        });
      };

      // Measuring the gap needs the PNGs sized, so wait for them to load.
      const imgs = Array.from(root.querySelectorAll('img'));
      const ready = imgs.map((img) =>
        img.complete && img.naturalHeight
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            })
      );

      // Registered on the context, not called bare, so the timeline it creates
      // is still tracked and reverted on unmount (strict mode double-mounts).
      Promise.all(ready).then(() => self.add(build));
    }, rootRef);

    return () => {
      cancelled = true;
      ctx.revert();
    };
  }, []);

  return (
    <div className="mh-wrap">
      {/* Kept out of the animated container so the lockup's text is always
          available to screen readers and crawlers. */}
      <span className="mh-sr">
        {topAlt} &mdash; {phrases[0]} &mdash; {bottomAlt}
      </span>

      <div ref={rootRef} className="mh" style={{ visibility: 'hidden' }} aria-hidden="true">
        <div ref={topRef} className="mh-row">
          <img src={topSrc} alt="" />
        </div>

        <div className="mh-row mh-mid">
          {phrases.map((phrase, i) => (
            <span
              key={phrase}
              ref={(el) => {
                phraseRefs.current[i] = el;
              }}
              className="mh-phrase"
            >
              {phrase}
            </span>
          ))}
        </div>

        <div ref={bottomRef} className="mh-row">
          <img src={bottomSrc} alt="" />
        </div>
      </div>

      <style jsx>{`
        .mh-wrap {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }
        .mh {
          position: relative;
          width: 100%;
          /* Establishes the cqw unit used to scale the middle row. */
          container-type: inline-size;
        }
        .mh-row {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mh-row img {
          display: block;
          width: 100%;
          height: auto;
        }
        .mh-mid {
          /* Reserve the row's height even while every phrase is faded out,
             so nothing below it shifts. */
          position: relative;
          height: 5.4cqw;
          min-height: 16px;
        }
        .mh-phrase {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          font-family: Montserrat, ui-sans-serif, system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(10px, 3.2cqw, 34px);
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          word-spacing: 0.35em;
          color: #0967d2;
          /* Balances the trailing letter-space so the line optically centres. */
          text-indent: 0.28em;
        }
        .mh-sr {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
};

export default Masthead;
```

---

## 6. Wire it in

One-line swap in `src/components/header/index.js` — leave the old Rive component and `.riv` file in place so reverting is trivial:

```diff
-import Animation from '@/components/animations/anim2025RT';
+import Animation from '@/components/animations/masthead';
```

---

## 7. Resulting timeline

| Time (s) | Event |
|---|---|
| 0.00 | Closed lockup: wordmark sitting on the subtitle |
| 0.25 – 1.05 | Wordmark rises, opening the middle row (`power3.out`) |
| 0.80 – 1.15 | "Rail Transit" fades in (overlapping the rise by 0.25s) |
| 1.95 – 2.30 | "Rail Transit" fades out |
| 2.30 – 2.65 | "[City]" fades in |
| 3.45 – 3.80 | "[City]" fades out |
| 3.80 – 4.15 | "[Dates]" fades in |
| 4.95 – 5.30 | "[Dates]" fades out |
| 5.30 – 5.65 | "Rail Transit" fades in — **stays** |

~5.7s total. If that feels long for something on every page load, cut `dwell` first. All knobs are the `T` object.

---

## 8. Design decisions (and why — don't undo these by accident)

- **The rise distance is measured at runtime**, not hard-coded. It survives different PNG heights and holds at every breakpoint.
- **Middle row scales with container queries (`cqw`), not viewport units.** The text must track the *lockup's* width, not the window's, or it desynchronises from the artwork. This requires `container-type: inline-size` on `.mh`.
- **No layout shift.** `.mh-mid` keeps its height while all phrases are `autoAlpha: 0`, and the wordmark moves by transform only. This matters because the masthead sits in a sticky header on every page — CLS here is sitewide.
- **`text-indent: 0.28em` on `.mh-phrase` is deliberate.** With heavy `letter-spacing`, the trailing space after the last glyph pushes the optical centre left. On a shrink-to-fit absolutely positioned box, `text-indent` adds a matching lead on the left, restoring symmetry. Don't "clean it up."
- **`visibility: hidden` inline on `.mh`, revealed by GSAP.** Prevents a flash of the final lockup before the effect runs. The trade-off is no-JS users see nothing — acceptable because the outgoing masthead was a Rive canvas (also JS-only), and the `.mh-sr` span keeps the text in the DOM and the accessibility tree regardless.
- **`aria-hidden` on the animated container + a visually-hidden text span outside it.** `visibility: hidden` removes content from the accessibility tree, so the lockup's text would otherwise be invisible to screen readers and crawlers.
- **`prefers-reduced-motion`** jumps straight to the rest state via `settle()`.

---

## 9. Gotchas discovered the hard way

1. **`gsap.context()` does not track tweens created asynchronously.** The timeline is built inside a `.then()` (waiting on image load), which lands *outside* the synchronous context callback — so `ctx.revert()` would not clean it up. Fix, already applied above: take `self` from the context callback and call `self.add(build)` rather than `build()`. **With `reactStrictMode: true` this is not cosmetic** — effects double-mount in dev and you get two timelines fighting each other.

2. **You must wait for the PNGs to load before measuring.** `offsetHeight` on an unloaded `<img>` is ~0, so the gap computes wrong and the wordmark starts in the wrong place. The `img.complete && img.naturalHeight` check plus `load`/`error` listeners handles this. Note the `error` listener — without it a 404'd asset hangs the promise forever and the masthead stays invisible.

3. **`container-type: inline-size` implies `contain: layout`,** which makes `.mh` a containing block for absolutely positioned descendants. Harmless here (`.mh-phrase` is positioned against `.mh-mid`), but worth knowing if the structure changes.

4. **Transforms don't affect `offsetTop`/`offsetHeight`,** so re-measuring is safe even if a previous run left a `y` transform on the wordmark.

5. **Phrase widths differ.** "SEPTEMBER 1 – 3, 2027" is much wider than "RAIL TRANSIT" at the same tracking. Each phrase is centred at its natural width. If a long one overflows the lockup on mobile, give it a per-phrase class with tighter `letter-spacing` rather than shrinking everything.

6. **`npm run dev` may land on port 3001** if 3000 is occupied. Read the actual port from the dev log rather than assuming.

7. **Pre-existing, unrelated, do not be alarmed:** `next dev` logs `API Routes cannot be used with "output: export"`. That is a standing condition of the repo, not caused by this work.

8. **Minor pre-existing bug in `src/styles/fonts.css`** (2026 repo — check whether 2027 inherited it): the `@font-face` blocks declare `font-style: bold`, which is invalid (that property takes `normal`/`italic`/`oblique`), and `montserrat-light.ttf` is declared twice at weight 300. It *works* — browsers drop the invalid descriptor and fall back to `normal`, so `font-weight: 800` still matches — but since the middle row depends on Montserrat 800, it's worth fixing while you're here.

---

## 10. Verification checklist

Static checks only get you so far; the original session stopped here. **Actually watch it.**

```bash
npm run dev            # note the real port
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
curl -s http://localhost:3000/ | grep -o 'mh-phrase\|masthead-top[^"]*'   # markup present?
```

Then, in a browser:

- [ ] Closed lockup is visible for the opening beat, and looks deliberate (not a broken overlap)
- [ ] Wordmark rises smoothly and lands aligned with the final layout
- [ ] All four fades fire in order; the last one **stays**
- [ ] Nothing below the masthead shifts at any point
- [ ] Middle row size, tracking and colour match the artwork — `3.2cqw` / `0.28em` were eyeballed from a screenshot and **will need tuning against the real PNGs**
- [ ] Check mobile widths — the longest phrase must not overflow
- [ ] Toggle OS "reduce motion" → lockup appears complete, no animation
- [ ] Client-side nav between pages does **not** replay it (`Layout` persists, so it shouldn't); a hard reload **does**
- [ ] No console errors, no duplicate/janky playback in dev (strict mode)

---

## 11. To revert

```bash
rm -f src/components/animations/masthead.js
git checkout -- src/components/header/index.js
rm -f public/masthead-top.png public/masthead-bottom.png   # only if placeholders
```

The old Rive path is untouched by this work, so restoring the import is the whole rollback.

---

## Appendix — separate, unstarted task

There is a **second, unrelated piece of work** the user raised before this one and put on hold: an **unlinked full-cover splash page for WRI 2027 RT** (Toronto, Aug 31 – Sep 2, 2027), intended to later spin off into its own repo. Only sizing advice was given; no code was written.

Summary of what was recommended, in case it's useful:

- Source image was a 7305 × 4874 (3:2), 300ppi, ~102MB print file of the CN Tower.
- Because `next.config.js` sets `images.unoptimized: true` with `output: 'export'`, **Next will not generate responsive variants** — hand-export and serve via `<picture>`/`srcset`.
- Landscape 16:9: 2560×1440 (≤450KB), 1920×1080 (≤250KB), 1280×720 (≤120KB), plus a 32×18 inline base64 LQIP. Skip 3840 — not worth the weight behind a gradient and text.
- **Separate art-directed portrait crop** for phones: 1170×1755 and 780×1170 (2:3). A 3:2 source under `object-fit: cover` on a ~1:2 phone viewport throws away ~55% of the width and would crop the tower badly.
- AVIF (q≈65) + WebP (q≈78) fallback; no JPEG needed.
- Suggested route `src/pages/2027.js` with `noindex`, no nav/footer wrapper, assets under `public/2027/`, so it lifts cleanly into its own repo. **Not confirmed by the user.**
- Also unanswered: what graphics the user intends to upload for the animated parts (SVG strongly preferred for anything that animates).
