import express from 'express';
import indexRouter from './index.route';
import massifRouter from './massif.route';
import stationRouter from './station.route';
import horsPisteRouter from './horspiste.route';


var router = express.Router();

router.use('/', indexRouter);
router.use('/api/massif', massifRouter);
router.use('/api/station', stationRouter);
router.use('/api/horspiste', horsPisteRouter);

module.exports = router;