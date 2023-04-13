import { Request, Response } from 'express';
import LBService from '../services/LeaderBoardService';

export default class LBController {
  service: LBService;

  constructor() {
    this.service = new LBService();
  }

  getAllHome = async (_req: Request, res: Response) => {
    const { type, message } = await this.service.getAllHome();
    return res.status(type).json(message);
  };

  getAllAway = async (_req: Request, res: Response) => {
    const { type, message } = await this.service.getAllAway();
    return res.status(type).json(message);
  };

  getAll = async (_req: Request, res: Response) => {
    const { type, message } = await this.service.getAll();
    return res.status(type).json(message);
  };
}
