# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for the WRI 2025 Rail Transit Conference (30th Anniversary Wheel Rail Interaction Conference) scheduled for August 26-28, 2025 in Seattle, WA. It's built with Next.js 13.5 as a static site and deployed on Netlify.

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
- `/pages` - Next.js page routes including multiple conference tracks (RT, HH, Principles)
- `/components` - Reusable React components organized by feature
- `/netlify/functions` - Serverless functions for newsletter, RSS feeds
- `/public` - Static assets including speaker images, sponsor logos
- `/styles` - Global styles and Tailwind configuration

### Key Implementation Patterns

1. **Multi-Conference Support**: The site handles multiple related conferences (Rail Transit, Heavy Haul, Principles Course) with shared components but distinct content.

2. **Dynamic Content Loading**: Speaker abstracts and bios are loaded dynamically through page routes like `/rt/abstracts/[id].js`.

3. **Registration Integration**: Uses Cvent widget embedding for conference registration.

4. **Responsive Design**: Mobile-first approach with specific breakpoints and touch-friendly navigation.

5. **Analytics**: Plausible Analytics integration for privacy-focused tracking.

6. **Email Subscription**: MailerLite integration through Netlify Functions for newsletter signups.

### Environment Variables
Required environment variables (set in Netlify):
- `MAILERLITE_API_KEY` - For newsletter subscriptions
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - For analytics tracking

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
1. Add speaker image to `/public/speakers/[conference]/`
2. Create new page in `/pages/[conference]/abstracts/[speaker-name].js`
3. Update speaker listing component with new entry

**Updating sponsor logos:**
1. Add optimized logo to `/public/sponsors/`
2. Update relevant sponsor tier component
3. Ensure proper alt text and link attributes

**Modifying conference dates/info:**
1. Update hero sections in relevant conference pages
2. Update meta tags and SEO information
3. Update registration widget embed codes if needed