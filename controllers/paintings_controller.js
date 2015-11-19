var express 		= require('express'),
	router 			= express.Router(),
	painting_data	= require('../models/painting.js'),
	artist_data 	= require('../models/artist.js');

router.get('/', function(req, res) {
	res.send(artists);
});

