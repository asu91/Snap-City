var mongoose = require('mongoose');

module.exports = mongoose.model('Entry', {
  // name: {type: String, default: ''},
  // bench: {type: Number, default: 0},
  squat: {type: Number, default: 0},
  deadlift: {type: Number, default: 0}
});