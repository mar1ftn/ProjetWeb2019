import massifController from "../controllers/massif.controller";
import express from 'express';

const router = express.Router();

router.post('/', massifController.new);
router.get('/:nom', massifController.getlemassif);
router.get('/', massifController.getlesmassifs);


export default router;