var express 	= require('express'),
	router 		= express.Router(),
	Painting	= require('../models/painting.js'),
	Artist 		= require('../models/artist.js');

router.get('/', function(req, res) {
	
	res.send(artists)
});