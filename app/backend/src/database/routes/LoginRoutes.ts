import { Response, Router } from 'express';
import LoginController from '../controllers/LoginControllers';
import { IRequest } from '../interfaces';
import tokenValidation from '../middlewares/tokenValidation';

const loginRouter = Router();
const controller = new LoginController();

loginRouter.post('/', (req, res) => controller.getToken(req, res));
loginRouter.get(
  '/role',
  tokenValidation,
  (req: IRequest, res: Response) => controller.getRole(req, res),
);

export default loginRouter;
