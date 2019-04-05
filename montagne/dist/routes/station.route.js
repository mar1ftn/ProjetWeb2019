'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _station = require('../controllers/station.controller');

var _station2 = _interopRequireDefault(_station);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _station2.default.new);
router.get('/:nom', _station2.default.getlastation);
router.get('/', _station2.default.getlesstations);

exports.default = router;
module.exports = exports.default;