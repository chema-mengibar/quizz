import styled, { css } from "styled-components";

import bl from '~/styles/shared/baseline.styles';
import zi from "~/styles/shared/zindex.styles";
import {GXAnswerStyled} from '~/components/games/shared/games.styles'
import {TimerStyled} from "~/components/visual/timer/timer.styles";

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
  height: auto;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: ${zi.clickableOptions};
  padding: 10px 0;
  ${GXAnswerStyled}:not(:last-child){
    margin-bottom: 10px;
  }
`

export const GWWordsControlPanelStyled = styled.div`
  display:flex;
  height: auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: ${zi.clickableOptions};
  padding: 10px 0;
  ${TimerStyled}:not(:last-child){
    margin-right: 10px;
  }
`
