import horspisteController from "../controllers/horspiste.controller";
import express from 'express';
const router = express.Router();

router.post('/', horspisteController.new);
router.get('/:nom', horspisteController.getlehorspiste);
router.get('/', horspisteController.getleshorspistes);


export default router;