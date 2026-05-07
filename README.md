# Portfolio Site

Personal portfolio built with Next.js App Router and Tailwind CSS. The site highlights projects, skills, experience, and contact details, with a cyber-inspired visual theme and animated interactions.

## Overview

This project is a single-page portfolio experience composed of modular sections and data-driven content. The primary content lives in a central data file, keeping updates quick and consistent.

Sections included:

- Hero with animated intro and social links
- About, Skills, Experience, Education
- Featured projects and additional projects grid
- Contact form and contact details

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

Key directories and files:

- app/ - App Router entry points and layout
- components/ - Section and UI components
- data/portfolio.ts - Primary content and metadata
- public/ - Static assets

## Local Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Customization

Most content is configured in [data/portfolio.ts](data/portfolio.ts). Update the following as needed:

- `personalInfo` for name, title, bio, and social links
- `skills`, `education`, `experience` arrays
- `projects` list for featured and other work

## Contact Form

The contact form submits to the API route at [app/api/contact/route.ts](app/api/contact/route.ts). Adjust validation and handling there if you want to change behavior.

## Scripts

Common commands:

- `npm run dev` - Start the local dev server
- `npm run build` - Build for production
- `npm run start` - Run the production build
- `npm run lint` - Run lint checks

## Deployment

Deploy with any platform that supports Next.js. Build output uses the standard Next.js build pipeline.
