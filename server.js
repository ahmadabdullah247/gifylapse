var express = require('express');
var path = require('path');
var cors = require('cors')

var app = express();
var port = process.env.PORT || 3000;


app.use(cors());
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use('/static', express.static(path.join(__dirname, '/assets')));


app.listen(port, () => console.log('Server live ', port));