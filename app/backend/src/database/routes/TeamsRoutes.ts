import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const teamsRouter = Router();
const controller = new TeamsController();

teamsRouter.get('/', (res, req) => controller.getAll(req, res));
teamsRouter.get('/:id', (res, req) => controller.getById(req, res));

export default teamsRouter;
