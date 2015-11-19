var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	logger 		= require('morgan'),
	mongoose	= require('mongoose'),
	app			= express();

var Artist = require('./models/artist.js'),
	Painting = require('./models/painting.js');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


/* MONGOOSE STUFF */

app.use(express.static('./public'));

app.listen(3000, function() {
	console.log('Our Museum is a Frilled Lizard on Port 3000...')
});

  ////////////////////////////////////////////////
 ///      ROUTES     ////////////////////////////
////////////////////////////////////////////////

app.get('/', (req, res) => res.render('index.html'));

app.use('/', Artist);
app.use('/', Painting);
