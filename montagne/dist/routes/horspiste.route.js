'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _horspiste = require('../controllers/horspiste.controller');

var _horspiste2 = _interopRequireDefault(_horspiste);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _horspiste2.default.new);
router.get('/:nom', _horspiste2.default.getlehorspiste);
router.get('/', _horspiste2.default.getleshorspistes);

exports.default = router;
module.exports = exports.default;