"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require("../config/db");

var _db2 = _interopRequireDefault(_db);

var _station = require("../model/station.model");

var _station2 = _interopRequireDefault(_station);

var _massif = require("../model/massif.model");

var _massif2 = _interopRequireDefault(_massif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var querystring = require('querystring');

function ajoutMassifStation(massifname, station) {

    _massif2.default.findOneAndUpdate({ nom: massifname }, { $inc: { nb_station: 1, nb_kilometre: station.nb_kilometre } }, function () {});
}

var stationController = function () {
    function stationController() {
        _classCallCheck(this, stationController);
    }

    _createClass(stationController, [{
        key: "new",
        value: function _new(req, res) {

            //verification des données
            if (!req.body.nom || !req.body.massifName || !req.body.nb_piste || !req.body.nb_kilometre) {
                res.json({ success: false, msg: 'Il manque des informations pour la création de votre station' });
            } else {
                var newStation = new _station2.default({
                    nom: req.body.nom,
                    massifName: req.body.massifName,
                    nb_piste: req.body.nb_piste,
                    nb_kilometre: req.body.nb_kilometre
                });

                newStation.save(function (err) {
                    if (err) {
                        console.log(err);
                        return res.json({ success: false, msg: 'Cette station existe déja' });
                    }

                    ajoutMassifStation(req.body.massifName, newStation);
                    res.json({ success: true, msg: 'Station créée avec succès' });
                });
            }
        }
    }, {
        key: "getlastation",
        value: function getlastation(req, res) {
            _station2.default.findOne({
                nom: req.params.nom
            }, function (err, station) {
                if (err) throw err;

                if (!station) {
                    res.status(404).send({ success: false, msg: 'Station non trouvée' });
                } else {
                    res.json(station);
                }
            });
        }
    }, {
        key: "getlesstations",
        value: async function getlesstations(req, res) {
            try {
                var stations = await _station2.default.find().lean().exec();
                res.json(stations);
            } catch (err) {
                return next(err);
            }
        }
    }]);

    return stationController;
}();

exports.default = new stationController();
module.exports = exports.default;