import styled, { css } from "styled-components";

export const TeamIndicatorStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background-color: #0c0624;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: 1px solid rgba(255,255,255, .3);
  border-right: 1px solid rgba(255,255,255, .3);
  border-bottom: 1px solid rgba(255,255,255, .3);
`;

export const TeamColorStyled = styled.div<{color?: string}>`
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: ${   ({color = 'black'}) => color }
  text-align:center;
  line-height:20px;
`;

export const RoundsStyled = styled.div<{color?: string}>`
  margin-right: 10px;
  color: white;
`;


