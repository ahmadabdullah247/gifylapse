## 1. HTML Changes

- [x] 1.1 Remove `#render-status` (and its children `#gif-progress` and `#render-label`) from the Recent GIFs `.about__section` in `.about__col-right`
- [x] 1.2 Add `#render-status` as second child of `.about__col-left`, directly after the `<video>` tag

## 2. CSS Changes

- [x] 2.1 Add `flex-direction: column` to the `.about__col-left` rule
- [x] 2.2 Change `.about__col-left video` width from `300px` to `380px`
- [x] 2.3 Change `progress` width from `180px` to `100%`
- [x] 2.4 Add `align-self: stretch` to `#render-status` CSS rule so it fills the column width (enabling `width: 100%` on `progress` to match the video width)
