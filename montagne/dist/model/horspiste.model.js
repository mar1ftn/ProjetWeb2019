'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
_mongoose2.default.set('useCreateIndex', true);

var HorsPisteSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stationName: {
    type: String,
    required: true
  },
  difficulte: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = _mongoose2.default.model('HorsPiste', HorsPisteSchema);