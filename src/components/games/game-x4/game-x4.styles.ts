import styled, { css } from "styled-components";

import bl from '~/styles/shared/baseline.styles';
import zi from '~/styles/shared/zindex.styles';

export const GX4ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const GX4HeaderContainerStyled = styled.div`
  min-height: ${bl._m6};
  flex: 1;
`

export const GX4BodyContainerStyled = styled.div`
  min-height:300px;
  width:100%;
  position:relative;
`

export const GX4FootersContainerStyled = styled.div`
  width:100%;
  height: ${bl._m8};
  z-index: ${zi.clickableOptions};
`

export const GX4AnswerKeyStyled = styled.div`
  color: orange;
  margin-right: 10px;
  &:after{
    display: inline: block;
    content: ':';
  }

`

export const GX4AnswerStyled = styled.div<{
  isSelected: boolean,
  isOk?: boolean
}>`
  border-radius: 28px;
  line-height: ${bl._m2};
  color: white;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 20px;
  font-size: 28px;
  width: 400px;
  box-sizing: border-box;
  
  transform: scale(0);
  animation: anima-option-loader 1s;
  animation-fill-mode: forwards;
  

  &.delay_0-0 {
    animation-delay: 1s;
  }

  &.delay_0-1{
    animation-delay: 2s;
  }

  &.delay_1-0 {
    animation-delay: 3s;
  }

  &.delay_1-1 {
    animation-delay: 4s;
  }


  @keyframes anima-option-loader {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  

  ${({ isSelected }) => isSelected &&
    css`
      color: black;
      border: 1px solid white;
      background-color: orange;
      ${GX4AnswerKeyStyled}{
        color:black;
      }
    `
  }
  ${({ isSelected }) => !isSelected &&
    css`
      border: 1px solid white;
      background: rgb(72,50,150);
      background: linear-gradient(180deg, rgba(72,50,150,1) 0%, rgba(17,8,51,1) 40%, rgba(17,8,51,1) 67%, rgba(70,44,165,1) 93%, rgba(72,50,150,1) 100%);
  
    `
  }
  ${({ isOk }) => isOk &&
    css`
    border: 3px solid green;
    box-shadow: 0 0 10px green;
    color: white;
    background-color: rgba(0,0,0,.3);
    ${GX4AnswerKeyStyled}{
      color:green;
    }
  `

  
  }`

export const GX4AnwerColumnStyled = styled.div`
  ${GX4AnswerStyled}:not(:last-child){
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
  color: white;
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

export const GX4QuestionMonitorStyled = styled.div`
  position:relative;
  align-items: center;
  justify-content: center;
  display: flex;
  max-width: 640px;
  width:100%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 30px;
  background-color: rgba(0,0,0, 0.3);

  &::after {
    display: block;
    content: '';
    position: absolute;
    height: 2px;
    width: 500px;
    background-color: white;
    right: left;
    top: 50%;
    right: 0;
    margin: 0 -500px;
  }

  &::before {
    display: block;
    content: '';
    position: absolute;
    height: 2px;
    width: 500px;
    background-color: white;
    right: left;
    top: 50%;
    left: 0;
    margin: 0 -500px;
  }
`

export const GX4QuestionImageStyled = styled.div`
  width: 400px;
  height: 90%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`