import {
  SCORE_INCREMENTAL_MAX_AMOUNT,
  SCORE_INCREMENTAL_MIN_AMOUNT,
} from '../config/constants';
import { CompetitorType } from '../types/campaign';
import { generateRandomNumberFromRange } from './random';

const updateCompetitorsRank = (competitors: CompetitorType[]) => {
  const randomExtraScore = generateRandomNumberFromRange(
    SCORE_INCREMENTAL_MIN_AMOUNT,
    SCORE_INCREMENTAL_MAX_AMOUNT
  );
  // Generate random number between 0-9
  const randomPosition = generateRandomNumberFromRange(
    0,
    competitors.length - 1
  );
  const updatedCompetitors = [...competitors];
  updatedCompetitors[randomPosition].score += randomExtraScore;

  // Sort list after update the score
  const sortedByScore = [...updatedCompetitors];
  sortedByScore.sort(
    (a: CompetitorType, b: CompetitorType) => b.score - a.score
  );
  // Update rank based on the sorted map
  sortedByScore.map((sortedCompetitor, index) => {
    const compititorToUpdate = updatedCompetitors.find(
      (competitor) => competitor.userID === sortedCompetitor.userID
    );
    if (compititorToUpdate) compititorToUpdate.rank = index;
  });

  return updatedCompetitors;
};
export { updateCompetitorsRank };
