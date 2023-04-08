import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  getAll = async (req: Request, res: Response) => {
    const { type, message } = await this.service.login(req.body);
    return res.status(type).json(message);
  };
}
