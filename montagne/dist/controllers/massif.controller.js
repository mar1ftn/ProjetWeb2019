'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../config/db');

var _db2 = _interopRequireDefault(_db);

var _massif = require('../model/massif.model');

var _massif2 = _interopRequireDefault(_massif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var querystring = require('querystring');

var massifController = function () {
    function massifController() {
        _classCallCheck(this, massifController);
    }

    _createClass(massifController, [{
        key: 'new',
        value: function _new(req, res) {

            //verification des données
            if (!req.body.nom) {
                res.json({ success: false, msg: 'Il faut un nom a votre massif' });
            } else {
                var newMassif = new _massif2.default({
                    nom: req.body.nom
                });

                newMassif.save(function (err) {
                    if (err) {
                        console.log(err);
                        return res.json({ success: false, msg: 'Ce massif existe déja' });
                    }

                    res.json({ success: true, msg: 'Massif créé avec succès' });
                });
            }
        }
    }, {
        key: 'getlemassif',
        value: function getlemassif(req, res) {
            _massif2.default.findOne({
                nom: req.params.nom
            }, function (err, massif) {
                if (err) throw err;

                if (!massif) {
                    res.status(404).send({ success: false, msg: 'Massif non trouvé' });
                } else {
                    massif.sucemabite();
                    res.json(massif);
                }
            });
        }
    }, {
        key: 'getlesmassifs',
        value: async function getlesmassifs(req, res) {
            try {
                var massifs = await _massif2.default.find().lean().exec();
                //res.setHead({'Access-Control-Allow-Origin' : '*'});
                res.json(massifs);
            } catch (err) {
                return next(err);
            }
        }
    }]);

    return massifController;
}();

exports.default = new massifController();
module.exports = exports.default;