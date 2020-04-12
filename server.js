/**
 * Created by Seth on 2/15/2018.
 */
// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');

// EXPRESS //
var app = module.exports = express();
app.use(
  bodyParser.json()
);
app.use(
  express.static(__dirname + '/src')
);

// CONNECTIONS //
app.listen(3051, function() {
    console.log('Listening on port thirty fifty one...');
});
