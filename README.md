# Cosmic Math

Cosmic Math is a space-themed math practice app for mission-based learning. This build is tailored for the 2022 Florida B.E.S.T. Grade 7 Unit 2 test on probability.

## Features

- Mission-based math practice with multiple-choice and numeric answers
- Saved local profile progress with stars, XP, rank, badges, ships, and settings
- Mission Control dashboard with planet routes, quest map, flight plan, ship hangar, badge collection, and settings
- One focused Unit 2 route with nine unlocked lesson missions:
  - 2.1 Exploring Sample Space
  - 2.2 Determining Sample Space
  - 2.3 Rewriting Numbers in Equivalent Forms
  - 2.4 Converting Between Repeating Decimals and Fractions
  - 2.5 Probability
  - 2.6 Comparing Probabilities
  - 2.7 Experimental and Theoretical Probability
  - 2.8 Simulating Small and Large Numbers of Trials
  - 2.9 Experimental and Theoretical Probabilities From Simulations
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
