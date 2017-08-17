document.getElementById("stop").disabled = true;

// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}

var timeId;
document.getElementById("start").addEventListener("click", function () {
    var count = 0;
    timeId = setInterval(function () {
        var div = document.createElement("div");
        var canvas = document.createElement("canvas");
        canvas.height = 480;
        canvas.width = 640;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 640, 480);
        div.appendChild(canvas);
        document.getElementById('container').appendChild(div);
    }, 2000);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
});

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(timeId);
    play();
});

function convertCanvasToImage() {
    var canvas = document.getElementById('canvas');

    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    alert(image);
    return image;
}


function play() {
    var imgs = document.getElementById('container').children;
    var encoder = new GIFEncoder();

    encoder.setRepeat(0); //auto-loop
    encoder.setDelay(500);
    encoder.start();
    for (var i = 0; i < imgs.length; i++) {
        encoder.addFrame(imgs[i].children[0].getContext('2d'));
    }
    encoder.finish();
    document.getElementById('image').src = 'data:image/gif;base64,' + encode64(encoder.stream().getData());
    var a = document.createElement('a');
    a.innerHTML = '&#x2193;';
    a.download = 'giflapse.gif';
    a.href = 'data:image/gif;base64,' + encode64(encoder.stream().getData());
    document.getElementById('controls').appendChild(a);
    document.getElementById("stop").disabled = true;
}

