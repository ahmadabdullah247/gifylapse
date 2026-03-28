## 1. Update index.html

- [x] 1.1 Update BoxIcons CDN from `2.0.7` to `2.1.4`
- [x] 1.2 Remove the Materialize CSS `<script>` tag (line ~106)
- [x] 1.3 Remove the `$(document).ready(function(){ $('.modal').modal(); });` inline script block
- [x] 1.4 Replace `<br>` tags inside `#settings-panel` with `.settings-row` divs:
  ```html
  <div id="settings-panel">
    <div class="settings-row">
      <label for="interval-input">Interval: <span id="interval-label">2000</span>ms</label>
      <input type="range" id="interval-input" min="500" max="5000" value="2000" step="500"
        oninput="document.getElementById('interval-label').textContent = this.value">
    </div>
    <div class="settings-row">
      <label for="resolution-select">Resolution:</label>
      <select id="resolution-select">
        <option value="320x240">320×240</option>
        <option value="640x480" selected>640×480</option>
        <option value="1280x720">1280×720</option>
      </select>
    </div>
    <div class="settings-row">
      <span id="frame-count-label" style="display:none;">Frames captured: <span id="frame-count">0</span></span>
    </div>
  </div>
  ```
- [x] 1.5 Remove `style` attribute from `#error-message` div (styling moves to CSS)
- [x] 1.6 Remove `style="display:none; margin-top:8px;"` from `#render-status` div (display toggling stays in JS; static styles move to CSS)
- [x] 1.7 Remove `style="width:200px;"` from `<progress id="gif-progress">` (width moves to CSS)
- [x] 1.8 Remove `style="margin-left:8px;"` from `<span id="render-label">` (spacing moves to CSS)

## 2. Update public/css/styles.css

- [x] 2.1 Fix `.about` section: change `height: 100vh` to `min-height: 80vh`
- [x] 2.2 Fix `#lapse` height: change `480px` to `300px`
- [x] 2.3 Add `cursor: pointer` and `transition: background-color 0.2s, box-shadow 0.2s` to `.button`
- [x] 2.4 Add `#error-message` CSS rule:
  ```css
  #error-message {
    display: none;
    color: #d32f2f;
    background-color: #fdecea;
    border: 1px solid #f5c6cb;
    border-radius: 0.4rem;
    padding: 0.6rem 0.8rem;
    margin-top: 0.75rem;
    font-size: 0.875rem;
  }
  ```
- [x] 2.5 Add `#render-status` CSS rule:
  ```css
  #render-status {
    display: none;
    margin-top: 0.75rem;
    align-items: center;
    gap: 0.75rem;
  }
  ```
- [x] 2.6 Add settings panel CSS:
  ```css
  #settings-panel {
    margin-top: 1rem;
  }
  .settings-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.6rem;
    flex-wrap: wrap;
  }
  .settings-row label {
    font-size: 0.875rem;
    color: var(--second-color);
    min-width: 9rem;
  }
  ```
- [x] 2.7 Add range input styling:
  ```css
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 160px;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--first-color);
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--first-color);
    cursor: pointer;
    border: none;
  }
  ```
- [x] 2.8 Add select styling (include dropdown arrow via background SVG to replace native arrow removed by appearance:none):
  ```css
  select {
    -webkit-appearance: none;
    appearance: none;
    padding: 0.35rem 2rem 0.35rem 0.75rem;
    border: 1px solid var(--first-color);
    border-radius: 0.4rem;
    font-family: var(--body-font);
    font-size: 0.875rem;
    color: var(--second-color);
    background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23745efe'/%3E%3C/svg%3E") no-repeat right 0.6rem center;
    cursor: pointer;
  }
  ```
- [x] 2.9 Add progress bar styling:
  ```css
  progress {
    -webkit-appearance: none;
    appearance: none;
    width: 180px;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    border: none;
  }
  progress::-webkit-progress-bar {
    background: #e0e0e0;
    border-radius: 4px;
  }
  progress::-webkit-progress-value {
    background: var(--first-color);
    border-radius: 4px;
  }
  progress::-moz-progress-bar {
    background: var(--first-color);
    border-radius: 4px;
  }
  ```

## 3. Update public/js/gifylapse.js (render-status display fix)

- [x] 3.1 In the stop handler, find `renderStatus.style.display = 'block';` and change it to `renderStatus.style.display = 'flex';` so the flex layout in the new CSS takes effect

## 4. Verify

- [x] 4.1 Confirm no `materialize` script tags in index.html
- [x] 4.2 Confirm no `<br>` tags inside `#settings-panel`
- [x] 4.3 Confirm BoxIcons references `2.1.4`
- [x] 4.4 Confirm `.about` uses `min-height` not `height: 100vh`
- [x] 4.5 Confirm `#lapse` height is `300px` in CSS
- [x] 4.6 Confirm `.button` has `cursor: pointer` and `transition`
- [x] 4.7 Confirm `renderStatus.style.display = 'flex'` in gifylapse.js
