var mongoose = require('mongoose');

module.exports = mongoose.model('Entry', {
  name: {type: String, default: ''},
  bench: {type: int, default: 0},
  squat: {type: int, default: 0},
  deadlift: {type: int, default: 0}
});