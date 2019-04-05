'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
_mongoose2.default.set('useCreateIndex', true);

var StationSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true
    },
    massifName: {
        type: String,
        required: true
    },
    nb_piste: {
        type: Number,
        required: true
    },
    nb_horspiste: {
        type: Number
    },
    nb_kilometre: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = _mongoose2.default.model('Station', StationSchema);