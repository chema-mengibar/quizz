import styled, { css } from "styled-components";

export const BuzzerIndicatorStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255,255,255, .8);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const StepColorStyled = styled.div<{color?: string}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${   ({color = 'black'}) => color }
`;
