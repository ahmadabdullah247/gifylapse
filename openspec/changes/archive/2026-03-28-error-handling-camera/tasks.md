## 1. Add Error Message Element to HTML

- [x] 1.1 Add `<div id="error-message" style="display:none; color:red; padding:8px;"></div>` inside the `about__container` div in `index.html`, after the `#result` div

## 2. Fix Camera Initialisation in gifylapse.js

- [x] 2.1 Add an `else` branch to the `if (navigator.mediaDevices)` guard that shows the error message: `"Camera not supported. Please use HTTPS or a modern browser."`
- [x] 2.2 Replace `.catch(err => console.log(err))` with a handler that shows the error message `"Camera access denied. Please allow camera permission and refresh."` and sets `document.getElementById('start').disabled = true`

## 3. Fix jQuery .disabled Bug

- [x] 3.1 In the start click handler: replace `$('#start').disabled = true` with `document.getElementById('start').disabled = true`
- [x] 3.2 In the start click handler: replace `$('#stop').disabled = false` with `document.getElementById('stop').disabled = false`
- [x] 3.3 In the stop click handler: replace `$('#start').disabled = false` with `document.getElementById('start').disabled = false`
- [x] 3.4 In the stop click handler: replace `$('#stop').disabled = true` with `document.getElementById('stop').disabled = true`

## 4. Guard Zero-Frame Render

- [x] 4.1 In the stop click handler, after `var imgs = document.getElementById('lapse').children;`, add a guard: if `imgs.length === 0`, show the error message `"No frames captured. Press GET STARTED and wait before stopping."` and return early

## 5. Verify

- [x] 5.1 Confirm `$('#start').disabled` and `$('#stop').disabled` no longer appear in gifylapse.js
- [x] 5.2 Confirm `<div id="error-message">` exists in index.html
- [x] 5.3 Confirm the zero-frame guard returns before `gif.render()` when `imgs.length === 0`
