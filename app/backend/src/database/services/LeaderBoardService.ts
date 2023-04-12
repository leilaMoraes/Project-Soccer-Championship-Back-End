import sequelize from '../models';
import home from '../utils/queries';

export default class LBService {
  getAllHome = async () => {
    const [result] = await sequelize.query(home);
    return { type: 200, message: result };
  };
}
