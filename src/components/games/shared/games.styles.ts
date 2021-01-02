import styled, { css } from "styled-components";

import bl from "~/styles/shared/baseline.styles";
import zi from "~/styles/shared/zindex.styles";


export const GXAnswerKeyStyled = styled.div`
  color: orange;
  margin-right: 10px;
  &:after{
    display: inline-block;
    content: ':';
  }
`

export const GXAnswerStyled = styled.div<{
  isSelected: boolean,
  isOk?: boolean
}>`
  line-height: ${bl._m2};
  display: flex;
  flex-direction: row;
  padding: 0 0 0 20px;
  font-size: 28px;
  width: 400px;
  transform: scale(0);
  animation: anima-option-loader 1s;
  animation-fill-mode: forwards;
  border-radius: 28px;
  color: white;
  
  &.centered{
    justify-content: center;
  }

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
      ${GXAnswerKeyStyled}{
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
    ${GXAnswerKeyStyled}{
      color:green;
    }
  `
}`


export const GXContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const GXHeaderContainerStyled = styled.div`
  min-height: 80px;
  flex: 1;
  z-index: ${zi.clickableOptions};
`

export const GXBodyContainerStyled = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  margin: 30px 0;
  z-index: ${zi.clickableOptions};
`

export const GXFootersContainerStyled = styled.div`
  width:100%;
  min-height: 180px;
  z-index: ${zi.clickableOptions};
`

export const GXQuestionImageStyled = styled.div`
  width: 590px;
  height: 90%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const GXQuestionMonitorStyled = styled.div`
  position:relative;
  align-items: center;
  justify-content: center;
  display: flex;
  max-width: 640px;
  width:100%;
  max-height: 450px;
  height: 300px;
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
    top: 50%;
    left: 0;
    margin: 0 -500px;
  }
`
