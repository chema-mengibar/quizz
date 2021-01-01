import styled, { css } from "styled-components";

import bl from '~/styles/shared/baseline.styles';

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
