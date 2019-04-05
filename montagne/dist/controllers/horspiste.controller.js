"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require("../config/db");

var _db2 = _interopRequireDefault(_db);

var _horspiste = require("../model/horspiste.model");

var _horspiste2 = _interopRequireDefault(_horspiste);

var _station = require("../model/station.model");

var _station2 = _interopRequireDefault(_station);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var querystring = require('querystring');

function ajoutStationHorsPiste(stationname, horspiste) {

    _station2.default.findOneAndUpdate({ nom: stationname }, { $inc: { nb_horspiste: 1 } }, function () {});
}

var horspisteController = function () {
    function horspisteController() {
        _classCallCheck(this, horspisteController);
    }

    _createClass(horspisteController, [{
        key: "new",
        value: function _new(req, res) {

            //verification des données
            if (!req.body.nom || !req.body.stationName || !req.body.description || !req.body.difficulte) {
                res.json({ success: false, msg: 'Il manque des informations pour la création de votre hors piste' });
            } else {
                var newHorsPiste = new _horspiste2.default({
                    nom: req.body.nom,
                    stationName: req.body.stationName,
                    description: req.body.description,
                    difficulte: req.body.difficulte
                });

                newHorsPiste.save(function (err) {
                    if (err) {
                        console.log(err);
                        return res.json({ success: false, msg: 'Ce hors piste existe déja' });
                    }

                    ajoutStationHorsPiste(req.body.stationName, newHorsPiste);
                    res.json({ success: true, msg: 'Hors piste créé avec succès' });
                });
            }
        }
    }, {
        key: "getlehorspiste",
        value: function getlehorspiste(req, res) {
            _horspiste2.default.findOne({
                nom: req.params.nom
            }, function (err, horspiste) {
                if (err) throw err;

                if (!horspiste) {
                    res.status(404).send({ success: false, msg: 'Hors piste non trouvée' });
                } else {
                    res.json(horspiste);
                }
            });
        }
    }, {
        key: "getleshorspistes",
        value: async function getleshorspistes(req, res) {
            try {
                var horspistes = await _horspiste2.default.find().lean().exec();
                return res.json(horspistes);
            } catch (err) {
                return next(err);
            }
        }
    }]);

    return horspisteController;
}();

exports.default = new horspisteController();
module.exports = exports.default;