import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

const StyledScore = styled.div`
  ${(props) => props.theme.score}
`;

const Score: FC<{ scoreValue: number; rank: number }> = ({
  scoreValue,
  rank,
}) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const [score, setScore] = useState(scoreValue);

  const incrementScore = useCallback(
    (time: number) => {
      const diffAmount = time - (previousTimeRef.current || 0);
      if (previousTimeRef.current !== undefined) {
        if (score < scoreValue) {
          setScore((score) => score + Math.floor(0.8 * diffAmount));
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(incrementScore);
    },
    [scoreValue, score]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(incrementScore);
    return () => cancelAnimationFrame(requestRef.current || 0);
  }, [incrementScore]);

  return (
    <StyledScore className={`rank${rank}`}>{Math.floor(score)} pt</StyledScore>
  );
};

export default Score;
