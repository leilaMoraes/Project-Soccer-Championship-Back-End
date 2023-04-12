import { IMatch } from "../../database/interfaces";
import MatchesModel from "../../database/models/MatchesModel";

const matches: any = [{
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
  inProgress: false,
  homeTeam: {
    id: 16,
    teamName: 'São Paulo'
  },
  awayTeam: {
    id: 8,
    teamName: 'Grêmio'
  }
},
{
  id: 2,
  homeTeamId: 9,
  homeTeamGoals: 1,
  awayTeamId: 14,
  awayTeamGoals: 1,
  inProgress: false,
  homeTeam: {
    id: 9,
    teamName: 'Internacional'
  },
  awayTeam: {
    id: 14,
    teamName: 'Santos'
  }
}]

const updateGoals = {
  homeTeamGoals: 3,
  awayTeamGoals: 1
}

export {matches, updateGoals};