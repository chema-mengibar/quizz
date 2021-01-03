import styled, { css } from "styled-components";
import theme from 'styled-theming';

import bl from '~/styles/shared/baseline.styles';
import zi from '~/styles/shared/zindex.styles';


export const QuestionContainerStyled = styled.div`
  width: 100%;
  height: 20%;

  &:only-child {
    height: 100%;
  }
  
  &:nth-of-type(2n) {
    height: 80%;
  }
`

export const QuestionMonitorStyled = styled.div`
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