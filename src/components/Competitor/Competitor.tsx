import React, { FC } from 'react';

import styled from 'styled-components';
import {
  COMPETITOR_CARD_HEIGHT,
  COMPETITOR_CARD_WIDTH,
} from '../../config/constants';
import { CompetitorType } from '../../types/campaign';
import Score from '../Score/Score';
import { ReactComponent as ChampionIcon } from '../../assets/svgs/champion.svg';

const StyledCompetitor = styled.div<{
  top: number;
  height: number;
  width: number;
}>`
  ${(props) => props.theme.competitor}
  display: flex;
  width: 100%;
  cursor: pointer;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  max-width: ${(props) => props.width}px;
  position: absolute;
  top: ${(props) => props.top * 70}px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease 0s;
  padding: 1rem;
  border-radius: 0.8rem 0;
  .competitor {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      margin-right: 0.4rem;
    }
  }
  .champion-badge {
    display: flex;
    padding: 0 0.4rem;
  }
`;

const Competitor: FC<
  Omit<CompetitorType, 'userID'> & { handleClick: () => void }
> = ({
  displayName,
  picture,
  score,
  rank,
  handleClick,
}: Omit<CompetitorType, 'userID'> & { handleClick: () => void }) => {
  return (
    <StyledCompetitor
      onClick={handleClick}
      top={rank || 0}
      height={COMPETITOR_CARD_HEIGHT}
      width={COMPETITOR_CARD_WIDTH}
    >
      <div className='competitor'>
        <div className='rank'>{(rank || 0) + 1}</div>
        <img className='profile-pic' src={picture} alt='' />
        {[0, 1, 2].includes(rank || 0) ? (
          <div className={`champion-badge-${rank}`}>
            <ChampionIcon />
          </div>
        ) : null}
        <div className='display-name'>{displayName}</div>
      </div>

      <Score rank={rank || 0} scoreValue={score} />
    </StyledCompetitor>
  );
};

export default Competitor;
