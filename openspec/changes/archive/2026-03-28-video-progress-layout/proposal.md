## Why

The GIF encoding progress indicator (`#render-status`) currently lives in the right-column "Recent GIFs" section, visually disconnected from the camera feed. Moving it under the video gives users direct feedback in the context of the recording. The video is also slightly undersized at 300px — bumping to 380px improves usability without breaking the two-column layout.

## What Changes

- `#render-status` (progress bar + label) is moved from the right column's "Recent GIFs" section into the left column, directly below the video element
- Video width increases from 300px to 380px
- `.about__col-left` gains `flex-direction: column` so video and progress stack vertically
- `progress` element width changes from fixed `180px` to `100%` to span the video width

## Capabilities

### New Capabilities

- `video-progress-layout`: Progress indicator positioned below the video in the left column

### Modified Capabilities

- `two-column-layout`: Left column now contains video + progress indicator (not video only)

## Impact

- `/app/index.html` — move `#render-status` from Recent GIFs section into `.about__col-left`
- `/app/public/css/styles.css` — `flex-direction: column` on `.about__col-left`, video width 380px, progress width 100%
- No JavaScript changes — all element IDs preserved, JS uses `getElementById` exclusively
