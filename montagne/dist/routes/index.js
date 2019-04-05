'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./index.route');

var _index2 = _interopRequireDefault(_index);

var _massif = require('./massif.route');

var _massif2 = _interopRequireDefault(_massif);

var _station = require('./station.route');

var _station2 = _interopRequireDefault(_station);

var _horspiste = require('./horspiste.route');

var _horspiste2 = _interopRequireDefault(_horspiste);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/', _index2.default);
router.use('/api/massif', _massif2.default);
router.use('/api/station', _station2.default);
router.use('/api/horspiste', _horspiste2.default);

module.exports = router;