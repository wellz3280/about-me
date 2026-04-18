# AGENTS.md

Guidance for coding agents working in this repository.

## Project snapshot

- Stack: Vite + React + TypeScript
- UI: Ant Design (`antd`)
- Routing: `react-router-dom`
- Theme state: `src/contexts/ThemeContext.tsx`
- App entry: `src/main.tsx` -> `src/App.tsx`

## Local workflow

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Lint:
   - `npm run lint`
4. Build:
   - `npm run build`
5. Preview production build:
   - `npm run preview`

## Source layout

- `src/App.tsx`: app composition (theme provider, router, layout shell).
- `src/components/`: reusable UI pieces and layout sections.
  - Component pattern: `index.tsx` + `styles.module.css`.
- `src/pages/`: route-level page components (`About`, `Contact`, `Skills`).
- `src/contexts/`: shared React context providers.
- `src/hooks/`: reusable hooks.
- `src/styles/`: global and theme CSS.

## Coding expectations

- Use TypeScript for all app logic.
- Keep components small and focused; favor composition over deep prop drilling.
- Place component-specific CSS in `styles.module.css` beside the component.
- Preserve existing naming and import style in touched files.
- Keep route definitions centralized in `src/components/Main/index.tsx`.
- For theme-related changes, ensure both Ant Design algorithm switching and CSS theme classes remain in sync.

## Validation before submitting changes

- Run `npm run lint`.
- Run `npm run build` for type-check + production build validation.
- If a change affects routing or theme toggling, sanity-check behavior in `npm run dev`.

## Git/PR notes

- Keep commits focused and descriptive.
- Do not include unrelated refactors.
- Update this file when architecture, scripts, or conventions change.
