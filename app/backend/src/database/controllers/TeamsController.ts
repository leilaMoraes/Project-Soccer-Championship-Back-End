import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  service: TeamsService;

  constructor() {
    this.service = new TeamsService();
  }

  getAll = async (res: Response, _req: Request) => {
    const { type, message } = await this.service.getAll();
    return res.status(type).json(message);
  };

  getById = async (res: Response, req: Request) => {
    const { id } = req.params;
    const { type, message } = await this.service.getById(Number(id));
    return res.status(type).json(message);
  };
}
