import config from '../config/db';
import Massif from "../model/massif.model";
const querystring = require('querystring');

class massifController {
    new(req, res) {
        
        //verification des données
        if (!req.body.nom) {
            res.json({success: false, msg: 'Il faut un nom a votre massif'});
        }else {
            var newMassif = new Massif({
                nom: req.body.nom  
            });
           
            newMassif.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false, msg: 'Ce massif existe déja'});
                }
                
                res.json({success: true, msg: 'Massif créé avec succès'});
                
            });
        }
    } 
    
    getlemassif (req,res) {
        Massif.findOne({
            nom: req.params.nom
        }, (err, massif) => {
            if (err) throw err;

            if (!massif) {
                res.status(404).send({success: false, msg: 'Massif non trouvé'});
            } else {
                massif.sucemabite();
                res.json(massif);
            }
        });
    }
    
    async getlesmassifs(req,res){
             try{
                let massifs = await Massif.find().lean().exec();
                 //res.setHead({'Access-Control-Allow-Origin' : '*'});
                    res.json(massifs); 
            }
            catch(err){
                return next(err);
            }    
    }
}

export default new massifController();