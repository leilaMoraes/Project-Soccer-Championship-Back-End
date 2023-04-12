import ApiError from '../utils/ApiError';
import { IMatchesValidations } from '../interfaces';

export default class MatchesValidations implements IMatchesValidations {
  matchValidation = (homeId: number, awayId: number): void => {
    if (homeId === awayId) {
      throw new ApiError(422, 'It is not possible to create a match with two equal teams');
    }
    if (homeId > 16 || awayId > 16) throw new ApiError(404, 'There is no team with such id!');
  };
}
