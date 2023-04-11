import { Request, Response } from 'express';
import { IRequest } from '../interfaces';
import LoginService from '../services/LoginService';

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  getToken = async (req: Request, res: Response) => {
    const { type, message } = await this.service.login(req.body);
    return res.status(type).json(message);
  };

  getRole = async (req: IRequest, res: Response) => {
    const email = req.user?.email;
    if (email) {
      const { type, message } = await this.service.getRole(email);
      return res.status(type).json(message);
    }
  };
}
