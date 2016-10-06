var express = require('express');
var app = express();
var logger = require('morgan');

if (!module.parent) {
	app.use(logger('dev'));
}
app.use('/picturepwd', require('./routes/index'));
app.use('/picturepwd/static', express.static('public'));

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

