import React, { FC } from 'react';

import styled from 'styled-components';
import { CompetitorType } from '../../types/campaign';

const StyledCompetitorDetails = styled.div`
  ${(props) => props.theme.competitorDetails}
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem 0;
  padding: 1rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
`;

const CompetitorDetails: FC<CompetitorType> = ({
  displayName,
  picture,
}: CompetitorType) => {
  return (
    <StyledCompetitorDetails>
      <img src={picture} alt='' />
      <div className='display-name'>{displayName}</div>
      <div className='details'>
        <span>Info</span>
        <span>Info</span>
        <span>Info</span>
      </div>
    </StyledCompetitorDetails>
  );
};

export default CompetitorDetails;
