import styled from "styled-components";

import bl from "~/styles/shared/baseline.styles";
import zi from "~/styles/shared/zindex.styles";

export const GXContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const GXHeaderContainerStyled = styled.div`
  min-height: ${bl._m6};
  flex: 1;
`

export const GXBodyContainerStyled = styled.div`
  min-height: 400px;
  width: 100%;
  position: relative;
  margin: 50px 0;
`

export const GXFootersContainerStyled = styled.div`
  width:100%;
  height: ${bl._m8};
  z-index: ${zi.clickableOptions};
  padding-top:20px;
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
