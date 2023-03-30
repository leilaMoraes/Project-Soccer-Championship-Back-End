import { Router } from 'express';
import MatchesController from '../controllers/MatchesControllers';

const matchesRouter = Router();
const controller = new MatchesController();

matchesRouter.get('/', (res, req) => controller.getAll(req, res));

export default matchesRouter;
