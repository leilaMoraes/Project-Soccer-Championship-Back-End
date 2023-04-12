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
    const progressValue = inProgress === 'true' ? 1 : 0; {
      const matches = await this.modelM.findAll({ where: { inProgress: progressValue },
        include: [
          { model: this.modelT, as: 'homeTeam' },
          { model: this.modelT, as: 'awayTeam' },
        ],
      });
      return { type: 200, message: matches };
    }
  }

  async finishingMatch(id: number): Promise<IServices> {
    await this.modelM.update({ inProgress: 0 }, { where: { id } });
    return { type: 200, message: 'Finished' };
  }
}
