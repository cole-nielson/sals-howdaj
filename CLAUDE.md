# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a marketing website for Sal's Howdaj, a Middle Eastern food truck in Boise, Idaho. The site showcases menu items, location, story, and catering options with a cinematic design.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: TailwindCSS with Tailwind Animate
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: Tanstack Query for server state
- **Form Handling**: React Hook Form with Yup/Zod validation
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Icons**: Lucide React
- **Build Tool**: Vite with SWC plugin

## Development Commands

### Essential Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development (with dev mode)
npm run build:dev

# Lint codebase
npm run lint

# Preview production build
npm run preview
```

### Notes on Commands
- Development server runs on port 8080 (configured in Vite)
- No test commands are configured - tests would need to be set up
- TypeScript compilation is handled by Vite

## Project Architecture

### File Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   └── [other components]
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configuration
│   ├── menu.ts          # Menu data and categories
│   ├── siteConfig.ts    # Site-wide configuration
│   └── utils.ts         # Utility functions
├── pages/               # Route-specific page components
└── App.tsx              # Main app with routing
```

### Key Architecture Patterns
- **Layout Component**: All routes use a shared `Layout` component that wraps page content
- **Centralized Configuration**: Site details, contact info, and schedule are in `siteConfig.ts`
- **Menu System**: Menu items and categories are managed in `lib/menu.ts` with TypeScript interfaces
- **Route Structure**: Simple React Router setup with all routes defined in `App.tsx`

### Important Files
- `src/lib/siteConfig.ts` - Central configuration for contact info, location, social links, and schedule
- `src/lib/menu.ts` - Menu items data with categories, pricing, and image paths
- `src/components/Layout.tsx` - Main layout wrapper with navigation and footer
- `src/pages/Index.tsx` - Homepage with hero carousel and featured content

## Development Guidelines

### Styling
- Uses TailwindCSS with custom configuration
- shadcn/ui components for consistent UI patterns
- Path alias `@/*` maps to `src/*`
- Responsive design with mobile-first approach

### Component Structure
- UI components follow shadcn/ui patterns
- Page components are in `/pages` directory
- Shared components in `/components` directory
- Custom hooks in `/hooks` directory

### Data Management
- Menu data is statically defined in TypeScript files
- Site configuration is centralized in `siteConfig.ts`
- Uses Tanstack Query for any future API integration

### TypeScript Configuration
- Relaxed TypeScript settings (`noImplicitAny: false`, `strictNullChecks: false`)
- Unused variables and parameters are allowed
- Path aliases configured for clean imports

## Future Development Notes
- TODO.md contains planned features including online ordering, merch store, and PWA features
- No authentication system currently implemented
- No backend API currently connected
- Images are stored in `public/updated_img/` and `public/lovable-uploads/`