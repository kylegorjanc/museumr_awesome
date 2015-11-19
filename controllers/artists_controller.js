var express 		= require('express'),
	router 			= express.Router(),
	painting_data	= require('../models/painting.js'),
	artist_data 	= require('../models/artist.js');

router.get('/artists', function(req, res) {
	console.log("the artists will go here");
});

