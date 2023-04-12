import { Router } from 'express';
import MatchesController from '../controllers/MatchesControllers';
import tokenValidation from '../middlewares/tokenValidation';

const matchesRouter = Router();
const controller = new MatchesController();

matchesRouter.get('/', (res, req) => controller.getAll(req, res));
matchesRouter.patch(
  '/:id/finish',
  tokenValidation,
  (res, req) => controller.finishingMatch(req, res),
);
matchesRouter.patch(
  '/:id',
  tokenValidation,
  (res, req) => controller.updateMatches(req, res),
);
matchesRouter.post(
  '/',
  tokenValidation,
  (res, req) => controller.newMatch(req, res),
);

export default matchesRouter;
