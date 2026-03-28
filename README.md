# GifyLapse

Create animated GIFs directly from your webcam in the browser.

## Live Demo

<https://gifylapse.azurewebsites.net>

## Features

- Capture webcam frames and encode them into an animated GIF
- Configurable capture interval (500 ms to 5000 ms) via slider
- Configurable resolution: 320x240, 640x480, or 1280x720
- Live frame counter during capture
- GIF encoding progress bar
- Visible error messages when camera access fails

## Getting Started

### Prerequisites

- Node.js 20+

### Install and Run

```sh
npm install
node index.js
```

Open <http://localhost:3000> in your browser.

## Browser Requirements

`getUserMedia` (the webcam API) requires a **secure context**. The app will only
work when served over HTTPS or accessed via `localhost`. Deploying behind a
plain HTTP domain will cause camera access to fail silently.

To change the listening port, set the `PORT` environment variable:

```sh
PORT=8080 node index.js
```

## Contributing

Issues and pull requests are welcome at
<https://github.com/ahmadabdullah247/gifylapse>.
