var mongoose = require('mongoose');
    Artist = require('./artists.js')

var paintingSchema = new mongoose.Schema({
  Title: String,
  Img_url: String,
  Year_made: Number
});

var Painting = mongoose.model('Painting', paintingSchema);
module.exports = P
