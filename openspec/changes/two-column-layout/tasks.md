## 1. HTML Restructuring

- [ ] 1.1 Wrap the video element in `<div class="about__col-left">` (replacing the old `.about__img` wrapper)
- [ ] 1.2 Create `<div class="about__col-right">` to hold all right-column content
- [ ] 1.3 Inside `.about__col-right`, create three `<div class="about__section">` wrappers: intro (heading + text + buttons), settings (Settings h2 + settings panel), output (Recent GIFs h2 + result + lapse + error + render-status)
- [ ] 1.4 Add `<h2 class="about__section-title">Settings</h2>` above `#settings-panel`
- [ ] 1.5 Add `<h2 class="about__section-title">Recent GIFs</h2>` above `#result`
- [ ] 1.6 Move `#lapse`, `#error-message`, and `#render-status` into the Recent GIFs section (after `#result`)

## 2. CSS Changes

- [ ] 2.1 Modify `.about__container` to use `grid-template-columns: 1fr 1fr`, `align-items: start`, `column-gap: 2rem`, `text-align: initial` (override `.bd-grid`'s 100% default)
- [ ] 2.2 Remove `.about__img video` rule (video no longer inside `.about__img`)
- [ ] 2.3 Remove the `@media (min-width: 768px)` block for `.about__container` and `.about__img video` (layout is now unconditional)
- [ ] 2.4 Add `.about__col-left` rule: `display: flex; align-items: center; justify-content: center;`
- [ ] 2.5 Add `.about__col-left video` rule: `width: 300px; min-width: 200px; border: 2px solid var(--first-color); border-radius: .5rem;`
- [ ] 2.6 Add `.about__col-right` rule: `display: flex; flex-direction: column; gap: var(--mb-4);`
- [ ] 2.7 Add `.about__section-title` rule: `font-size: var(--h2-font-size); color: var(--first-color); margin-bottom: var(--mb-2);`
