# Architectural Patterns

## Data Separation

Static content is kept in `src/data/` as plain JS modules exporting arrays/objects. Components import this data and render it via `.map()`. This keeps content editable without touching component logic.

- Pattern source: `src/data/projects.js:1-5` (data) → `src/components/Receipt.jsx:29-35` (rendering)
- When adding new content sections (skills, experience, etc.), create a new file in `src/data/` and import it into the consuming component.

## Component Structure

- **Thin root:** `App.jsx` imports global CSS and renders a single child component. No state, no props, no routing.
- **Flat hierarchy:** Components live directly in `src/components/` (no nesting). Given the project's scope, this is intentional — don't introduce subdirectories unless the component count grows significantly.

## CSS Conventions

- **Single stylesheet:** All styles live in `src/App.css`, imported once in `App.jsx:1`.
- **Prefix-based naming:** CSS classes use a `receipt-` prefix to namespace component styles (e.g., `receipt-header`, `receipt-row`, `receipt-divider`). Follow this pattern for new sections.
- **No CSS modules or CSS-in-JS:** Styling is plain CSS with class selectors. Keep it that way for consistency.
- **Visual effects are CSS-only:** The torn paper edge (`receipt-torn-edge` at `App.css:169-177`) and row hover inversion (`App.css:124-132`) use pure CSS — no JS animations.

## Design Language

The receipt metaphor is central to the design. New sections should maintain this aesthetic:
- Use dashed dividers between sections (the `receipt-divider` class)
- Keep text uppercase with letter-spacing
- Use the existing monospace font stack (`Space Mono`, `Courier New`, monospace)
- Maintain the black-on-white color scheme within the receipt area
