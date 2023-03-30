import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  service: MatchesService;

  constructor() {
    this.service = new MatchesService();
  }

  getAll = async (res: Response, _req: Request) => {
    const { type, message } = await this.service.getAll();
    return res.status(type).json(message);
  };
}
