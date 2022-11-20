import React, { FC } from 'react';

import styled from 'styled-components';
import { ResultMessageType } from '../../types/resultMessage';
import successIcon from '../../assets/svgs/success.svg';
import errorWarningIcon from '../../assets/svgs/warning-error.svg';

const StyledResultMessage = styled.div`
  ${(props) => props.theme.resultMessage}
  display: flex;
  width: 100%;
  padding: 1rem 1rem 1rem 3.5rem;
  border-radius: 0.5rem;
  &.success,
  &.error,
  &.warning {
    background-repeat: no-repeat;
    background-position: 2% 5px;
    z-index: 100;
  }
  &.success {
    background-image: url(${successIcon});
  }
  &.error,
  &.warning {
    background-image: url(${errorWarningIcon});
  }
`;

const ResultMessage: FC<ResultMessageType> = ({
  className,
  message,
}: ResultMessageType) => {
  return (
    <StyledResultMessage className={className}>{message}</StyledResultMessage>
  );
};

export default ResultMessage;
