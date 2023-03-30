import MatchesModel from '../models/MatchesModel';

export interface IServices {
  type: number;
  message: string | unknown;
}

export interface IMatches extends MatchesModel{
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
  homeTeam: {
    teamName: string
  },
  awayTeam: {
    teamName: string
  }
}
