import { Router } from 'express';
import LBController from '../controllers/LeaderBoardControllers';

const lbRouter = Router();
const controller = new LBController();

lbRouter.get('/home', (req, res) => controller.getAllHome(req, res));
lbRouter.get('/away', (req, res) => controller.getAllAway(req, res));
lbRouter.get('/', (req, res) => controller.getAll(req, res));

export default lbRouter;
