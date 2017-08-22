document.getElementById('stop').disabled = true;

// Grab elements, create settings, etc.
var video = document.getElementById('video');
var output = document.getElementById('image');
output.style.display = 'none';

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(err => console.log('Something went wrong while fetching cam!'));
}


var timeId;
document.getElementById('start').addEventListener('click', function () {
    var count = 0;
    timeId = setInterval(function () {
        var div = document.createElement('div');
        var canvas = document.createElement('canvas');
        canvas.height = 480;
        canvas.width = 640;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 640, 480);
        make_base(context);
        div.appendChild(canvas);
        document.getElementById('container').appendChild(div);
    }, 2000);
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
});

var base_image = new Image();
base_image.src = 'http://gifylapse.com/static/img/gifylapse.png';  //'assets/img/gifylapse.png';
base_image.height = 32;
base_image.width = 32;
base_image.crossOrigin = 'Anonymous';
base_image.onload = function () { console.log('loaded'); };

function make_base(context) {

    context.drawImage(base_image, 0, 410);
}

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timeId);
    video.style.display = 'none';
    output.style.display = 'block';
    play();
});


function play() {
    // debugger;
    var imgs = document.getElementById('container').children;
    var encoder = new GIFEncoder();
    encoder.setRepeat(0);       //  0:loop forever, >1 : loop n times
    encoder.setDelay(500);      //  Go to next frame every n milliseconds
    // encoder.setQuality(10);  //  10: default, lowe is better
    // encoder.setTransparent(0xffffff);
    encoder.start();
    for (var i = 0; i < imgs.length; i++) {
        var canvasContext = imgs[i].children[0].getContext('2d');
        canvasContext.translate(640, 0);
        canvasContext.scale(-1, 1);
        canvasContext.drawImage(imgs[i].children[0], 0, 0);

        if (encoder.addFrame(canvasContext)) {
            console.log('Frame added');
        } else { console.log('Frame not added'); }
    }
    encoder.finish();
    try {
        document.getElementById('image').src = 'data:image/gif;base64,' + encode64(encoder.stream().getData());
        var downloadBtn = document.getElementById('download');
        downloadBtn.download = 'giflapse.gif';
        downloadBtn.href = 'data:image/gif;base64,' + encode64(encoder.stream().getData());
        document.getElementById('stop').disabled = true;
    } catch (err) {
        console.log(err);
    }

}

