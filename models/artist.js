          
var mongoose = require('mongoose'),
    Painting = require('./painting.js');

var ArtistSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: String,
  description: String,
  paintings: [{
    name: mongoose.Schema.Types.ObjectId,
    // ref: 'Painting'  *** THIS LINE IS BREAKING THE SERVER. NOT SURE WHY.  kmg ****
  }]
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
