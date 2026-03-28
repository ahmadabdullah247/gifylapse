## Why

The current main section stacks all elements (video, controls, settings, GIF output) vertically in a single flow, making the interface hard to scan and requiring excessive scrolling. A two-column layout separates the camera feed from the controls and output, giving each a dedicated space and improving usability.

## What Changes

- The about section is restructured into two always-visible side-by-side columns
- Left column: video element only, centered, with a border, not stretched
- Right column: three stacked sections — intro text + buttons, Settings heading + settings panel, Recent GIFs heading + output area
- CSS layout switches from responsive single/double column to a permanent two-column grid
- New semantic wrapper elements introduced for the two columns and right-column sections
- New "Settings" and "Recent GIFs" section headings added

## Capabilities

### New Capabilities

- `two-column-layout`: Two-column about section — left for video, right for controls/output with section headings

### Modified Capabilities

- `capture-settings`: Settings panel is now under a "Settings" heading in the right column (layout change only, no behavioral change)
- `ui-theme`: Layout grid and video border styling additions

## Impact

- `/app/index.html` — restructured about section HTML
- `/app/public/css/styles.css` — new column wrapper styles, modified grid rules, removed responsive overrides for about section
- No JavaScript changes required (all element IDs preserved)
- ScrollReveal animations: `.about__img`, `.about__subtitle`, `.about__text` selectors remain valid
