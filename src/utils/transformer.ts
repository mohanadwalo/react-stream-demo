import { CompetitorType } from '../types/campaign';

const setCompetitorsDefaultRank = (competitors: CompetitorType[]) => {
  // if the data is not in desc sortng at first render
  competitors.sort((a, b) => b.score - a.score);
  return competitors.map((competitor, index) => {
    return { ...competitor, rank: index };
  });
};
export { setCompetitorsDefaultRank };
