import styled, { css } from "styled-components";

export const TimerStyled = styled.div<{color: string}>`
  font-size:28px;
  cursor: pointer;
  color: ${   ({color = 'white'}) => color };
  user-select: none;
`;
