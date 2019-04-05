'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _massif = require('../controllers/massif.controller');

var _massif2 = _interopRequireDefault(_massif);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _massif2.default.new);
router.get('/:nom', _massif2.default.getlemassif);
router.get('/', _massif2.default.getlesmassifs);

exports.default = router;
module.exports = exports.default;