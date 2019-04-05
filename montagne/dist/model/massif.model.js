'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
_mongoose2.default.set('useCreateIndex', true);

var MassifSchema = new Schema({
  nom: {
    type: String,
    required: true,
    unique: true
  },
  nb_station: {
    type: Number,
    default: 0
  },
  nb_kilometre: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

MassifSchema.methods.sucemabite = function () {};

module.exports = _mongoose2.default.model('Massif', MassifSchema);