// Grab elements, create settings, etc.
var video = document.getElementById('videoElement');
var output = document.getElementById('image');


var logo_image = new Image();
logo_image.src = 'static/img/gifylapse.png'; 
logo_image.height = 32;
logo_image.width = 32;
logo_image.crossOrigin = 'Anonymous';
logo_image.onload = function () { console.log('loaded'); };

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function(err) {
            var errorEl = document.getElementById('error-message');
            errorEl.textContent = 'Camera access denied. Please allow camera permission and refresh.';
            errorEl.style.display = 'block';
            document.getElementById('start').disabled = true;
        });
} else {
    var errorEl = document.getElementById('error-message');
    errorEl.textContent = 'Camera not supported. Please use HTTPS or a modern browser.';
    errorEl.style.display = 'block';
}

var timeId;
document.getElementById('start').addEventListener('click', function () {
    var errorEl = document.getElementById('error-message');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
    var interval = parseInt(document.getElementById('interval-input').value, 10);
    var resParts = document.getElementById('resolution-select').value.split('x');
    var resWidth = parseInt(resParts[0], 10);
    var resHeight = parseInt(resParts[1], 10);
    document.getElementById('frame-count').textContent = '0';
    document.getElementById('frame-count-label').style.display = 'inline';
    timeId = setInterval(function () {
        var div = document.getElementById('lapse');
        var canvas = document.createElement('canvas');
        canvas.height = resHeight;
        canvas.width = resWidth;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, resWidth, resHeight);
        context.drawImage(logo_image, 0, resHeight - 70);
        context.translate(resWidth, 0);
        context.scale(-1, 1);
        context.drawImage(canvas, 0, 0);
        div.appendChild(canvas);
        document.getElementById('frame-count').textContent = String(parseInt(document.getElementById('frame-count').textContent, 10) + 1);
    }, interval);
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('interval-input').disabled = true;
    document.getElementById('resolution-select').disabled = true;
});


document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timeId);
    var imgs = document.getElementById('lapse').children;

    if (imgs.length === 0) {
        var errorEl = document.getElementById('error-message');
        errorEl.textContent = 'No frames captured. Press GET STARTED and wait before stopping.';
        errorEl.style.display = 'block';
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('interval-input').disabled = false;
        document.getElementById('resolution-select').disabled = false;
        return;
    }

    var gif = new GIF({ workers: 2, quality: 10 });

    for (var i = 0; i < imgs.length; i++) {
        gif.addFrame(imgs[i], {delay: 200})
    }
    // clear all elements
    $('#lapse').empty();

    gif.on('finished', function(blob) {
        var url = URL.createObjectURL(blob)
        var img = $('<img id="dynamic">');
        img.attr('id', 'gif');
        img.attr('src', url);
        img.appendTo('#result');
        img.wrap('<a href="' + url+ '" download="gifylapse" />')
    });
    gif.render();
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('interval-input').disabled = false;
    document.getElementById('resolution-select').disabled = false;
});


