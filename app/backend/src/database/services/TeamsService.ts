import { ModelStatic } from 'sequelize';
import { IServices } from '../interfaces';
import TeamsModel from '../models/TeamsModel';

export default class TeamsService {
  model: ModelStatic<TeamsModel>;

  constructor() {
    this.model = TeamsModel;
  }

  async getAll(): Promise<IServices> {
    const teams = await this.model.findAll();
    return { type: 200, message: teams };
  }
}
