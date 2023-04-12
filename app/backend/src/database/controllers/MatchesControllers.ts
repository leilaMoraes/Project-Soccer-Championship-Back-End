import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  service: MatchesService;

  constructor() {
    this.service = new MatchesService();
  }

  getAll = async (res: Response, req: Request) => {
    const { inProgress } = req.query;
    if (!inProgress) {
      const { type, message } = await this.service.getAll();
      return res.status(type).json(message);
    }
    const { type, message } = await this.service.getInProgress(inProgress as string);
    return res.status(type).json(message);
  };

  finishingMatch = async (res: Response, req: Request) => {
    const { id } = req.params;
    const { type, message } = await this.service.finishingMatch(Number(id));
    return res.status(type).json({ message });
  };

  updateMatches = async (res: Response, req: Request) => {
    const { id } = req.params;
    const { type, message } = await this.service.updateMatches(Number(id), req.body);
    return res.status(type).json({ message });
  };

  newMatch = async (res: Response, req: Request) => {
    const { type, message } = await this.service.newMatch(req.body);
    return res.status(type).json(message);
  };
}
