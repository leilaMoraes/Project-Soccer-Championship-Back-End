import { Router } from 'express';
import LoginController from '../controllers/LoginControllers';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = Router();
const controller = new LoginController();

loginRouter.post(
  '/',
  (res, req, next) => loginValidation(req, res, next),
  (res, req) => controller.getAll(req, res),
);

export default loginRouter;
