import styled, {css} from "styled-components";

export const FrameIntroStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

export const TitleStyled = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  color: white;
  font-size: 120px;
  user-select: none;
`;

export const ControlsStyled = styled.div`
  display:flex;
  width: 300px;
  justify-content: center;
  align-center: center;
  margin-top:10px;

  & > div{
    background-color: #362182;
    padding: 5px 10px;
    &:hover{
      background-color: white;
      cursor:pointer;
    }
  }
`;
