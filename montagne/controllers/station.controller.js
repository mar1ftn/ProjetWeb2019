import config from '../config/db';
import Station from "../model/station.model";
import Massif from "../model/massif.model";
const querystring = require('querystring');


function ajoutMassifStation(massifname , station){
    
    Massif.findOneAndUpdate({nom : massifname} , {$inc : {nb_station : 1 , nb_kilometre : station.nb_kilometre }} , ()=>{
        
    });
}

class stationController {
    new(req, res) {
        
        //verification des données
        if (!req.body.nom || !req.body.massifName || !req.body.nb_piste || !req.body.nb_kilometre) {
            res.json({success: false, msg: 'Il manque des informations pour la création de votre station'});
        }else {
            var newStation = new Station({
                nom: req.body.nom,
                massifName: req.body.massifName,
                nb_piste: req.body.nb_piste,
                nb_kilometre: req.body.nb_kilometre
            });
           
            newStation.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false, msg: 'Cette station existe déja'});
                }
                
                ajoutMassifStation(req.body.massifName, newStation);
                res.json({success: true, msg: 'Station créée avec succès'});
                
            });
        }
    } 
    
    getlastation (req,res) {
        Station.findOne({
            nom: req.params.nom
        }, (err, station) => {
            if (err) throw err;

            if (!station) {
                res.status(404).send({success: false, msg: 'Station non trouvée'});
            } else {
                res.json(station);
            }
        });
    }
    
    async getlesstations(req,res){
             try{
                let stations = await Station.find().lean().exec();
                res.json(stations); 
            }
            catch(err){
                return next(err);
            }    
    }
}

export default new stationController();