import React, { useCallback, useEffect, useRef, useState } from 'react';
import { COMPETITORS_API_RATE } from '../config/constants';
import { CompetitorType } from '../types/campaign';
import styled from 'styled-components';
import Competitor from '../components/Competitor/Competitor';
//Temp data for the purpose of the assignment
// In reality this will be replaced by real api implementation
import initialCampaignData from '../api/competitors-initial-data.json';
import { updateCompetitorsRank } from '../utils/sort';
import { setCompetitorsDefaultRank } from '../utils/transformer';
import CompetitorDetails from '../components/Competitor/CompetitorDetails';

const StyledLeaderBoard = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  width: 100%;
  justify-content: center;
  .competitors {
    display: flex;
    position: relative;
    width: 400px;
    margin: 0 1rem;
  }
  .competitor-details {
    display: flex;
    flex-direction: column;
  }
`;

const LeaderBoard = () => {
  const [competitors, setCompetitors] = useState<CompetitorType[]>(
    setCompetitorsDefaultRank(initialCampaignData)
  );
  const [compititorId, setCompititorId] = useState(0);

  const newScoreInterval = useRef<NodeJS.Timeout>();

  const handleTimer = useCallback(() => {
    newScoreInterval.current = setInterval(() => {
      setCompetitors(updateCompetitorsRank(competitors));
    }, COMPETITORS_API_RATE);
  }, []);

  useEffect(() => {
    handleTimer();
    // clear timer before unmount
    return () => clearInterval(newScoreInterval.current);
  }, []);

  return (
    <StyledLeaderBoard>
      <div className='competitors'>
        {competitors?.map((competitor, index) => (
          <Competitor
            handleClick={() => setCompititorId(index)}
            key={competitor.userID}
            {...competitor}
          />
        ))}
      </div>
      <div className='competitor-details'>
        <CompetitorDetails {...competitors[compititorId]} />
      </div>
    </StyledLeaderBoard>
  );
};

export default LeaderBoard;
