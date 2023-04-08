import { Router } from 'express';
import LoginController from '../controllers/LoginControllers';

const loginRouter = Router();
const controller = new LoginController();

loginRouter.post('/', (req, res) => controller.getAll(req, res));

export default loginRouter;
