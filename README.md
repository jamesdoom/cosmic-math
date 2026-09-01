# Cosmic Math

Cosmic Math is a space-themed math practice app for mission-based learning. This build is tailored for 7th-grade Unit 1 test prep focused on rational number operations.

## Features

- Mission-based math practice with multiple-choice and numeric answers
- Saved local profile progress with stars, XP, rank, badges, ships, and settings
- Mission Control dashboard with planet routes, quest map, flight plan, ship hangar, badge collection, and settings
- One focused Unit 1 route with ten unlocked lesson missions:
  - 1-1 Relate Integers and Their Opposites
  - 1-2 Understand Rational Numbers
  - 1-3 Add Integers
  - 1-4 Subtract Integers
  - 1-5 Add and Subtract Rational Numbers
  - 1-6 Multiply Integers
  - 1-7 Multiply Rational Numbers
  - 1-8 Divide Integers
  - 1-9 Divide Rational Numbers
  - 1-10 Solve Problems with Rational Numbers
- Motion and sound settings for classroom-friendly feedback control
- Developer test controls for resetting progress and granting test stars

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run checks:

```bash
npm run lint
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Cosmic Math is a static Vite app. To deploy:

1. Run `npm run build`.
2. Deploy the generated `dist/` folder to a static host.
3. Configure the host to serve `dist/index.html` for app routes if route fallback is required.

The app stores student progress in the browser with `localStorage`. No backend or database is required.

## Notes

- Sound effects are off by default and can be enabled in Mission Control settings.
- Motion effects are on by default and can be disabled in Mission Control settings.
- Reset Profile clears local saved progress for the current browser.
