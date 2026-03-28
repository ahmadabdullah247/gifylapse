## Context

The about section currently has a flat grid where all elements (video, text, buttons, settings, lapse preview, result output) are direct children of `.about__container.bd-grid`. The 768px media query switches the grid from one column to `repeat(2, 1fr)`, causing elements to pair up unpredictably across multiple rows. This needs to become a stable, always-visible two-column layout.

The app is plain HTML/CSS/JavaScript — no framework, no bundler. All element IDs are preserved so no JavaScript changes are needed.

## Goals / Non-Goals

**Goals:**
- Always-two-column layout (not responsive stacking)
- Left column: video centered with border, not stretched
- Right column: three stacked sections with headings — intro, Settings, Recent GIFs
- Minimal HTML/CSS changes; no JS changes

**Non-Goals:**
- Responsive/mobile stacking behavior
- Changing GIF capture or encoding logic
- Modifying any JavaScript

## Decisions

### Decision 1: Two explicit wrapper divs, not CSS grid placement

Two new wrapper divs (`.about__col-left`, `.about__col-right`) become the only direct children of `.about__container`. The right column uses internal flex stacking for its three sections.

**Alternatives considered:** CSS `grid-column` placement on individual children — rejected because the right column needs internal vertical grouping, which requires wrapper elements anyway.

### Decision 2: Always two columns — override responsive breakpoint

`.about__container` gets `grid-template-columns: 1fr 1fr` unconditionally (overrides `.bd-grid`'s `100%`). The existing `@media (min-width: 768px)` block for `.about__container` and `.about__img video` is removed.

**Rationale:** User explicitly wants columns always side-by-side. The video's natural size (300px) is already fixed, so both columns will have reasonable widths even on moderate screen sizes.

### Decision 3: Right-column sections use `.about__section` wrapper

Three `<div class="about__section">` wrappers group the content. Each gets a `.about__section-title` heading styled with `--first-color`.

**Rationale:** Clean semantics. Makes future reordering trivial. Consistent spacing via flex `gap` on `.about__col-right`.

### Decision 4: Video border via `.about__col-left video` rule

A `2px solid var(--first-color)` border is added on the video via `.about__col-left video`. The existing `.about__img video` rule is removed (video is no longer inside `.about__img`).

## Risks / Trade-offs

- **Narrow viewports**: Both columns compress to ~50% on small screens. Acceptable tradeoff per requirements. → Mitigation: `min-width: 200px` on the video prevents extreme compression.
- **ScrollReveal**: `sr.reveal('.about__img')` still fires on `#result` and `#lapse` which keep the `.about__img` class. New column wrappers won't animate — acceptable.
- **`#lapse` placement**: Moved under "Recent GIFs" section. The `#lapse` canvas strip (frame preview) and `#result` (final GIF) are both under this heading, with `#result` first as primary output.
