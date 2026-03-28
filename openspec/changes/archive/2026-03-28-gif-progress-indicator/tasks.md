## 1. Add Render Status Panel to index.html

- [x] 1.1 After `<div id="error-message" ...>` (line 66), add:
  ```html
  <div id="render-status" style="display:none; margin-top:8px;">
    <progress id="gif-progress" value="0" max="100" style="width:200px;"></progress>
    <span id="render-label" style="margin-left:8px;">Encoding GIF…</span>
  </div>
  ```

## 2. Update gifylapse.js — Start Handler

- [x] 2.1 At the top of the start click handler (alongside the error div hide), also hide the render status:
  `document.getElementById('render-status').style.display = 'none';`

## 3. Update gifylapse.js — Stop Handler (normal render path)

- [x] 3.1 Before `gif.render()`, show the render status panel and set the label:
  ```js
  var renderStatus = document.getElementById('render-status');
  var gifProgress = document.getElementById('gif-progress');
  var renderLabel = document.getElementById('render-label');
  renderStatus.style.display = 'block';
  renderLabel.textContent = 'Encoding GIF…';
  gifProgress.value = 0;
  ```
- [x] 3.2 Before `gif.render()`, disable all interactive controls for the duration of rendering:
  ```js
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = true;
  document.getElementById('interval-input').disabled = true;
  document.getElementById('resolution-select').disabled = true;
  ```
- [x] 3.3 Add a `gif.on('progress', ...)` handler before `gif.render()`:
  ```js
  gif.on('progress', function(val) {
      gifProgress.value = Math.round(val * 100);
  });
  ```
- [x] 3.4 Move the four re-enable lines from after `gif.render()` INTO the `finished` callback, and add "Done!" feedback:
  - Remove lines 95–98 (the four `disabled = false` lines after `gif.render()`)
  - Inside the `finished` callback, after appending the image, add:
  ```js
  renderLabel.textContent = 'Done!';
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
  document.getElementById('interval-input').disabled = false;
  document.getElementById('resolution-select').disabled = false;
  setTimeout(function() { renderStatus.style.display = 'none'; }, 1500);
  ```

## 4. Verify

- [x] 4.1 Confirm `<div id="render-status">` and `<progress id="gif-progress">` exist in index.html
- [x] 4.2 Confirm the four `disabled = false` lines no longer appear after `gif.render()` in gifylapse.js
- [x] 4.3 Confirm `gif.on('progress', ...)` handler is present
- [x] 4.4 Confirm re-enable logic is inside the `finished` callback
