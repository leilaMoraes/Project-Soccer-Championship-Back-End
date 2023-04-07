import { Router } from 'express';
import LoginController from '../controllers/LoginControllers';

const loginRouter = Router();
const controller = new LoginController();

loginRouter.post('/', (res, req) => controller.getAll(req, res));

export default loginRouter;
