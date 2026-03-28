## 1. Add Settings Panel and Frame Counter to index.html

- [x] 1.1 After the Start/Stop buttons (after line 48), add the settings panel:
  ```html
  <div id="settings-panel" style="margin-top:12px;">
    <label for="interval-input">Capture interval: <span id="interval-label">2000</span>ms</label><br>
    <input type="range" id="interval-input" min="500" max="5000" value="2000" step="500" style="width:200px;" oninput="document.getElementById('interval-label').textContent = this.value">
    <br><br>
    <label for="resolution-select">Resolution:</label>
    <select id="resolution-select">
      <option value="320x240">320×240</option>
      <option value="640x480" selected>640×480</option>
      <option value="1280x720">1280×720</option>
    </select>
    <br><br>
    <span id="frame-count-label" style="display:none;">Frames captured: <span id="frame-count">0</span></span>
  </div>
  ```

## 2. Update gifylapse.js — Start Handler

- [x] 2.1 At the top of the start click handler, read settings:
  ```js
  var interval = parseInt(document.getElementById('interval-input').value, 10);
  var resParts = document.getElementById('resolution-select').value.split('x');
  var resWidth = parseInt(resParts[0], 10);
  var resHeight = parseInt(resParts[1], 10);
  ```
- [x] 2.2 Reset frame counter and show the counter label:
  ```js
  document.getElementById('frame-count').textContent = '0';
  document.getElementById('frame-count-label').style.display = 'inline';
  ```
- [x] 2.3 Replace hardcoded `2000` in `setInterval(..., 2000)` with `interval`
- [x] 2.4 Replace hardcoded `canvas.height = 480`, `canvas.width = 640`, and the `0, 0, 640, 480` arguments in `context.drawImage(video, ...)` with `resWidth` / `resHeight`
- [x] 2.4b Replace hardcoded logo Y-position: `context.drawImage(logo_image, 0, 410)` → `context.drawImage(logo_image, 0, resHeight - 70)` so the watermark stays near the bottom at any resolution
- [x] 2.4c Replace hardcoded mirror translate: `context.translate(640, 0)` → `context.translate(resWidth, 0)` so the flip works correctly at all resolutions
- [x] 2.5 Add frame counter increment inside the setInterval callback: `document.getElementById('frame-count').textContent = String(parseInt(document.getElementById('frame-count').textContent, 10) + 1);`
- [x] 2.6 Disable settings controls on Start: `document.getElementById('interval-input').disabled = true;` and `document.getElementById('resolution-select').disabled = true;`

## 3. Update gifylapse.js — Stop Handler

- [x] 3.1 Re-enable settings controls on Stop: `document.getElementById('interval-input').disabled = false;` and `document.getElementById('resolution-select').disabled = false;`
- [x] 3.2 Also re-enable on the zero-frame early-return path (add same two lines before `return`)

## 5. Verify

- [x] 5.1 Confirm `id="interval-input"`, `id="resolution-select"`, `id="frame-count"` all exist in index.html
- [x] 5.2 Confirm no hardcoded `2000` remains in the setInterval call in gifylapse.js
- [x] 5.3 Confirm no hardcoded `480` / `640` remain in canvas dimension or drawImage calls
- [x] 5.4 Confirm settings controls are disabled/re-enabled in both start and stop handlers
