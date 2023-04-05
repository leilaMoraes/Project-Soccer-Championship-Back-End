import { ModelStatic } from 'sequelize';
import { ILogin, IServices } from '../interfaces';
import UsersModel from '../models/UsersModel';
import { createToken } from '../utils/token';

export default class LoginService {
  model: ModelStatic<UsersModel>;

  constructor() {
    this.model = UsersModel;
  }

  async login(login: ILogin): Promise<IServices> {
    const { email } = login;
    await this.model.findOne({ where: { email } });
    const token = createToken(email);
    return { type: 200, message: { token } };
  }
}
