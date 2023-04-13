import sequelize from '../models';
import { home, away, all } from '../utils/queries';

export default class LBService {
  getAllHome = async () => {
    const [result] = await sequelize.query(home);
    return { type: 200, message: result };
  };

  getAllAway = async () => {
    const [result] = await sequelize.query(away);
    return { type: 200, message: result };
  };

  getAll = async () => {
    const [result] = await sequelize.query(all);
    return { type: 200, message: result };
  };
}
