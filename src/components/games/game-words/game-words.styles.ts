import styled, { css } from "styled-components";

import zi from "~/styles/shared/zindex.styles";

export const ButtonResolveStyled = styled.div`
  width: 100px;
  height:25px;
  background-color: #0c0624;
  border-radius: 10px;
  text-align:center;
  line-height:25px;
  color: white;
  border: 1px solid rgba(255,255,255,.3)
`

export const GWQuestionStyled = styled.div`
  display:flex;
  height: 100%;
  align-items: center;
`

export const CopyQestionStyled = styled.div`
  color: white;
  font-size: 28px;
  width:100%;
  text-align:center;
  line-height:32px;
`

export const GWWordsContainerStyled = styled.div`
  display:flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: ${zi.clickableOptions};
`
