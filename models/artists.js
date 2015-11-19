var mongoose = require('mongoose'),
    Painting = require('./paintings.js');

var ArtistSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: new Date,
  description: String
  paintings: [{
    name: mongoose.Schema.Types.ObjectId,
    ref: 'Painting'
  }]
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
