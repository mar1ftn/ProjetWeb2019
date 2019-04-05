import stationController from "../controllers/station.controller";
import express from 'express';
const router = express.Router();


router.post('/', stationController.new);
router.get('/:nom', stationController.getlastation);
router.get('/', stationController.getlesstations);


export default router;