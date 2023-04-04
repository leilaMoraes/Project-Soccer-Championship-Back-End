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
}
