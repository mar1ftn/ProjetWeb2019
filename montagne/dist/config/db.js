'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'secret': 'my secret',
    'database': process.env.NODE_ENV == 'test' ? 'mongodb://localhost/montagne-api-test' : 'mongodb://localhost/montagne-api'
};
module.exports = exports.default;