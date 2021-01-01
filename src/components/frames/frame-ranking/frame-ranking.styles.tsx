import styled, {css} from "styled-components";

export const FrameRankingStyled = styled.div`
  height: 100%;
  width: 100%;
`;

export const FrameTitleStyled = styled.div`
  height: auto;
  width:100%;
  color: white;
  padding:10px;
  font-size: 45px;
  text-align:left;
  color: #8d7ad5;
`;
  
export const RankContainerStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
  
export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  margin: 0 25px;
  align-items: center;
  justify-content: center;
`;

export const BarContainerStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items:center;
  height: 200px;
  width:100%
  border-bottom: 4px solid white;
`;

export const BarStyled = styled.div`
  width:90%
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: inset -1px -17px 21px -4px rgba(0,0,0,0.35);
`;

export const BarPointsStyled = styled.span`
  width:100%;
  text-align:center;
  color: white;
  font-size: 18px;
  margin-bottom:5px;
`;

export const NameContainerStyled = styled.div`
  height: 30px;
  width:100%;
  color: white;
  padding:10px;
  font-size: 25px;
  text-align:center;
`;



