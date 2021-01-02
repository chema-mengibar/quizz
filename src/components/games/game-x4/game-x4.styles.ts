import styled, { css } from "styled-components";

import bl from '~/styles/shared/baseline.styles';
import {GXAnswerStyled} from '~/components/games/shared/games.styles'


export const GX4AnwerColumnStyled = styled.div`
  ${GXAnswerStyled}:not(:last-child){
    margin-bottom: ${bl._};
  }
`

export const GX4AnwersContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding ${bl._} 0;
  

  ${GX4AnwerColumnStyled} + ${GX4AnwerColumnStyled}{
    margin-left: 20px;
  } 
`

export const GX4TimerColumnStyled = styled.div`
  display:flex;
  align-items: center;
`

export const GX4TimerStyled = styled.div`
  height: 70px;
  width: 70px;
  border: 2px solid white;
  border-radius: 35px;
  line-height:70px;
  font-size: 24px;
  text-align: center;
  color: orange;
  position:relative;
`

export const GX4TimerCounterStyled = styled.div`
  position: absolute;
  height: 70px;
  width: 70px;
  border: 2px solid orange;
  border-radius: 35px;
  top: 0px;
  left: 0px;
`

export const GX4QuestionStyled = styled.div`
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
