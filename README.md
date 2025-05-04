
# Sal's Howdaj - Middle Eastern Food Truck

A marketing website for Sal's Howdaj, a Middle Eastern food truck in Boise, Idaho. This project showcases the menu, story, location, and catering options with a cinematic and minimal design.

## Tech Stack

- React
- TypeScript
- React Router
- TailwindCSS
- Radix UI Components
- Tanstack Query

## Local Development

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Setup and Run

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd sals-howdaj

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080`.

## Deployment

This project is configured for easy deployment on Vercel:

1. Create a Vercel account if you don't have one
2. Connect your GitHub repository to Vercel
3. Configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

## Project Structure

```
/src
  /components        - Reusable UI components
  /lib               - Helper functions and data
  /pages             - Route-specific page components
  /public/images     - Static assets and images
  App.tsx            - Main application entry
  index.css          - Global styles
```

## Features

- Responsive, mobile-first design
- Cinematic video hero section
- Interactive menu with filtering options
- Location page with Google Maps integration
- Contact form with validation
- Catering information page
- FAQ section with expandable accordions

## Author

Sal's Howdaj

## License

All rights reserved.
