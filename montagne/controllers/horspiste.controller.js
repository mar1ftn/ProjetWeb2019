import config from '../config/db';
import HorsPiste from "../model/horspiste.model";
import Station from "../model/station.model";
const querystring = require('querystring');

function ajoutStationHorsPiste( stationname , horspiste ){
        
        Station.findOneAndUpdate({nom : stationname} , {$inc : {nb_horspiste : 1}} , ()=>{
        
    });
        
    }

class horspisteController {
    new(req, res) {
        
        //verification des données
        if (!req.body.nom || !req.body.stationName || !req.body.description || !req.body.difficulte) {
            res.json({success: false, msg: 'Il manque des informations pour la création de votre hors piste'});
        }else {
            var newHorsPiste = new HorsPiste({
                nom: req.body.nom,
                stationName: req.body.stationName,
                description: req.body.description,
                difficulte: req.body.difficulte
            });
           
            newHorsPiste.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false, msg: 'Ce hors piste existe déja'});
                }
                
                ajoutStationHorsPiste(req.body.stationName, newHorsPiste);
                res.json({success: true, msg: 'Hors piste créé avec succès'});
                
            });
        }
    } 
    
    getlehorspiste (req,res) {
        HorsPiste.findOne({
            nom: req.params.nom
        }, (err, horspiste) => {
            if (err) throw err;

            if (!horspiste) {
                res.status(404).send({success: false, msg: 'Hors piste non trouvée'});
            } else {
                res.json(horspiste);
            }
        });
    }
    
    async getleshorspistes(req,res){
             try{
                let horspistes = await HorsPiste.find().lean().exec();
                return res.json(horspistes); 
            }
            catch(err){
                return next(err);
            }    
    }
    
}

export default new horspisteController();