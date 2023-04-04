import { ModelStatic } from 'sequelize';
import { IServices } from '../interfaces';
import MatchesModel from '../models/MatchesModel';
import TeamsModel from '../models/TeamsModel';

export default class MatchesService {
  modelM: ModelStatic<MatchesModel>;
  modelT: ModelStatic<TeamsModel>;

  constructor() {
    this.modelM = MatchesModel;
    this.modelT = TeamsModel;
  }

  async getAll(): Promise<IServices> {
    const matches = await this.modelM.findAll({
      include: [
        { model: this.modelT, as: 'homeTeam' },
        { model: this.modelT, as: 'awayTeam' },
      ],
    });
    return { type: 200, message: matches };
  }

  async getInProgress(inProgress: string): Promise<IServices> {
    if (inProgress === 'true') {
      const matchesTrue = await this.modelM.findAll({ where: { inProgress: 1 },
        include: [
          { model: this.modelT, as: 'homeTeam' },
          { model: this.modelT, as: 'awayTeam' },
        ],
      });
      return { type: 200, message: matchesTrue };
    }
    const matchesFalse = await this.modelM.findAll({ where: { inProgress: 0 },
      include: [
        { model: this.modelT, as: 'homeTeam' },
        { model: this.modelT, as: 'awayTeam' },
      ],
    });
    return { type: 200, message: matchesFalse };
  }
}
