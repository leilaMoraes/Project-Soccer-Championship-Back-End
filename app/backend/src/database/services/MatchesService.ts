import { ModelStatic } from 'sequelize';
import { IGoals, IMatch, IMatchesValidations, IServices } from '../interfaces';
import MatchesValidations from '../middlewares/matchesValidation';
import MatchesModel from '../models/MatchesModel';
import TeamsModel from '../models/TeamsModel';

export default class MatchesService {
  modelM: ModelStatic<MatchesModel>;
  modelT: ModelStatic<TeamsModel>;
  validation: IMatchesValidations;

  constructor() {
    this.modelM = MatchesModel;
    this.modelT = TeamsModel;
    this.validation = new MatchesValidations();
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

  async updateMatches(id: number, goals: IGoals): Promise<IServices> {
    const { homeTeamGoals, awayTeamGoals } = goals;
    await this.modelM.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return { type: 200, message: 'Updated' };
  }

  async newMatch(match: IMatch): Promise<IServices> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = match;
    this.validation.matchValidation(homeTeamId, awayTeamId);
    const newMatch = await this.modelM
      .create({ homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals, inProgress: 1 });
    return { type: 201, message: newMatch };
  }
}
