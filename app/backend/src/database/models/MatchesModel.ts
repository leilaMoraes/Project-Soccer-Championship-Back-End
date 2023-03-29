import { INTEGER, BOOLEAN, Model } from 'sequelize';
import db from '.';
import TeamsModel from './TeamsModel';

class MatchesModel extends Model {
  declare id: number;
  declare teamName: string;
}

MatchesModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: INTEGER,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
  },
  inProgress: {
    type: BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

TeamsModel.belongsTo(MatchesModel, { foreignKey: 'teamId', as: 'homeTeamId' });
TeamsModel.belongsTo(MatchesModel, { foreignKey: 'teamId', as: 'awayTeamId' });

MatchesModel.hasMany(TeamsModel, { foreignKey: 'homeTeamId', as: 'teamId' });
MatchesModel.hasMany(TeamsModel, { foreignKey: 'awayTeamId', as: 'teamId' });

export default MatchesModel;
