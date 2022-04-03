import { get, isString } from 'lodash';
import { RankingError } from './ranking.types';

export const isRankingError = (error: unknown): error is RankingError => {
  const message = get(error, 'message');
  return isString(message);
};
