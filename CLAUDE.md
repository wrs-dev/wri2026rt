# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for the WRI 2026 Rail Transit Conference (31st Anniversary Wheel Rail Interaction Conference) scheduled for September 1-3, 2026 in Boston, MA. It's built with Next.js 13.5 as a static site and deployed on Netlify.

## Essential Commands

```bash
# Development
npm run dev        # Start development server at localhost:3000

# Build & Production
npm run build      # Build static site for production
npm run start      # Start production server

# Code Quality
npm run lint       # Run ESLint
```

## Architecture & Key Patterns

### Tech Stack
- **Next.js 13.5** with static export (`output: 'export'`)
- **React 18** with functional components
- **Tailwind CSS** with custom configuration
- **Netlify Functions** for serverless backend
- **Storyblok** CMS integration
- **Rive** for interactive animations
- **GSAP/Framer Motion** for animations

### Project Structure
- `/src/pages` - Next.js page routes including multiple conference tracks (RT, HH, Principles)
- `/src/components` - Reusable React components organized by feature
- `/netlify/functions` - Serverless functions for newsletter subscriptions and RSS feeds
- `/public` - Static assets including speaker images, sponsor logos, Rive animations
- `/src/styles` - Global styles and Tailwind configuration

### Key Implementation Patterns

1. **Multi-Conference Support**: The site handles multiple related conferences (Rail Transit, Heavy Haul, Principles Course) with shared components but distinct content.

2. **Dynamic Content Loading**: Speaker abstracts and bios are loaded dynamically through page routes like `/rt/abstracts/[id].js`.

3. **Registration Integration**: Uses Cvent widget embedding for conference registration.

4. **Responsive Design**: Mobile-first approach with specific breakpoints and touch-friendly navigation.

5. **Analytics**: Plausible Analytics integration for privacy-focused tracking.

6. **Email Subscription**: MailerLite integration through Netlify Functions for newsletter signups.

### Environment Variables
Required environment variables (set in Netlify):
- `MAILERLITE_PRODUCTION_API_KEY` - For newsletter subscriptions
- `MAILERLITE_PRODUCTION_BASE_API_URL` - MailerLite API base URL
- `MAILERLITE_PRODUCTION_NEWSLETTER_GROUP_ID` - MailerLite group ID for subscribers
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - For analytics tracking (wri2026rt.wheel-rail-seminars.com)
- `STORYBLOK_API_TOKEN` - For CMS content fetching

### Deployment
The site is configured for static export and automatic deployment via Netlify:
- Builds trigger on push to main branch
- Uses `@netlify/plugin-nextjs` for optimized static site generation
- Serverless functions deploy automatically from `/netlify/functions`

### Brand Guidelines
- Primary colors: Custom WRI palette defined in `tailwind.config.js`
- Fonts: Ronnia (headings), Montserrat (body text)
- All sponsor/speaker images should be optimized for web

### Common Tasks

**Adding a new speaker:**
1. Add speaker image to `/public/speakers/[conference]/` (optimize for web)
2. Update the relevant speaker component in `/src/components/speakers/speakers[RT|HH|PC].js`
3. Add speaker bio/abstract data to the component's speaker array

**Updating sponsor logos:**
1. Add optimized logo to `/public/` (use descriptive naming like `gold-companyname.png`)
2. Update relevant sponsor component in `/src/components/sponsors/`
3. Ensure proper alt text and link attributes

**Modifying conference dates/info:**
1. Update hero sections in relevant conference pages (`/src/pages/[conference].js`)
2. Update countdown timer in registration component if needed
3. Update meta tags in `_app.js` or page-specific props

**Key File Locations:**
- Conference pages: `/src/pages/rail-transit-seminar.js`, `/src/pages/heavy-haul-seminar.js`, `/src/pages/principles-course.js`
- Registration component with pricing: `/src/components/registration/index.js`
- Banner animations: `/src/components/banner/wri26RT.js`, `/src/components/banner/wri26HH.js`
- Cvent registration widgets: `/src/components/CventWidget.js` (dev) and `/src/components/CventWidget-prod.js` (production)