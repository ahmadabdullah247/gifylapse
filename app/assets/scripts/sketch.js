var capture;
var recording = false;
var c;
var gif;

function setup() {
  console.log("SETUP");
  c = createCanvas(320, 240);
  console.log("c, ",c);
  capture = createCapture(VIDEO);
  console.log("c, ",capture);
  capture.size(320, 240);
  console.log("c, ",capture);
  capture.hide();
  console.log("c, ",capture);
  console.log("=============================");

  setupGif();
}

function draw() {
  console.log("DRAW");
  background(255);
  image(capture, 0, 0, 320, 240);

  if (recording && frameCount % 3 == 0) {
    gif.addFrame(c.elt, {delay: 1, copy: true});
  }
}

function clicki() {
  console.log("CLICKI");
  recording = !recording;
  if (!recording) {
    gif.render();
  }
}

function setupGif() {
  console.log("SETUPGif");
  gif = new GIF({ workers: 2, quality: 40 });
  gif.on('finished', function(blob) {
    window.open(URL.createObjectURL(blob));
    setupGif();
  });
}