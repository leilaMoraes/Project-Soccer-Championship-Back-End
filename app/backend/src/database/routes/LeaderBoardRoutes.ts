import { Router } from 'express';
import LBController from '../controllers/LeaderBoardControllers';

const lbRouter = Router();
const controller = new LBController();

lbRouter.get('/home', (req, res) => controller.getAllHome(req, res));

export default lbRouter;
