import styled, { css } from "styled-components";

import bl from '~/styles/shared/baseline.styles';
import zi from '~/styles/shared/zindex.styles';

export const GX1ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const GX1HeaderContainerStyled = styled.div`
  min-height: ${bl._m6};
  flex: 1;
`

export const GX1BodyContainerStyled = styled.div`
  min-height:300px;
  width:100%;
  position:relative;
`

export const GX1FootersContainerStyled = styled.div`
  width:100%;
  height: ${bl._m8};
  z-index: ${zi.clickableOptions};
  padding-top:20px;
`


export const GX1AnwerColumnStyled = styled.div`

`

export const GX1AnwersControlsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding ${bl._} 0;

  ${GX1AnwerColumnStyled} + ${GX1AnwerColumnStyled}{
    margin-left: 20px;
  } 
`

export const GX1AnwerStyled = styled.div`
  text-align:center;
  font-size: 24px;
`
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

export const GX1AnwersContainerStyled = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  ${ButtonResolveStyled}{
    margin-top: 10px;
  }
`


export const ButtonPointStyled = styled.div`
  font-size:30px;
  width:40px;
  height:40px;
  border-radius: 20px;
  color: white;
  line-height:40px;
  text-align:center;

  &.ok{ 
    background-color: green;
  }
  &.wrong{ 
    background-color: red;
  }
`


export const GX1QuestionStyled = styled.div`
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

export const GX1QuestionMonitorStyled = styled.div`
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

export const GX1QuestionImageStyled = styled.div`
  width: 400px;
  height: 90%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`