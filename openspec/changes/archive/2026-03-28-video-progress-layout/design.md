## Context

After the two-column layout refactor, `.about__col-left` contains only the `<video>` element styled with `display: flex; align-items: center; justify-content: center;` (no `flex-direction`, defaulting to row). The `#render-status` div is currently in the right column inside the "Recent GIFs" `.about__section`. Moving it into the left column requires stacking the video and progress bar vertically.

The video is at `width: 300px`. A bump to `380px` keeps it within the left column's `1fr` share of the `1024px` max-width grid (approx 480px per column after gaps/margins).

## Goals / Non-Goals

**Goals:**
- Progress bar renders directly below the video
- Video appears slightly larger (380px)
- Progress bar width matches the video width

**Non-Goals:**
- Changing encoding logic or JS
- Responsive/mobile layout changes
- Changing the progress bar's visual style

## Decisions

### Decision 1: Move `#render-status` into `.about__col-left`

Place `#render-status` as the second child of `.about__col-left`, after `<video>`. Add `flex-direction: column` to `.about__col-left` so the two children stack vertically. `align-items: center` and `justify-content: center` are kept so the column contents remain centred.

### Decision 2: Progress width → `100%`

The progress element currently has a fixed `width: 180px`. Under the video it should span the same width. Setting `width: 100%` lets it fill `.about__col-left`'s flex width, which is constrained to the video's `380px`. This produces a visually aligned progress bar without hardcoding a second width value.

### Decision 3: Video width → 380px

A modest increase (80px / ~27%) from 300px. Stays well within the available column width and doesn't require layout changes beyond updating the single CSS value.

## Risks / Trade-offs

- **`#render-status` margin-top**: The existing `margin-top: 0.75rem` on `#render-status` provides spacing from the video — no change needed. → No action required.
- **`justify-content: center` on column**: With `flex-direction: column`, `justify-content: center` vertically centres the video+progress group within the column height. This is acceptable behaviour. → No action required.
