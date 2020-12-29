import styled, { css } from "styled-components";

export const TeamIndicatorStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255,255,255,.5);
`;

export const TeamColorStyled = styled.div<{color?: string}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${   ({color = 'black'}) => color }
`;


