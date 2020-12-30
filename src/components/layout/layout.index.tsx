
import styled, { css } from "styled-components";
import theme from 'styled-theming';

import bl from '~/styles/shared/baseline.styles';
import zi from '~/styles/shared/zindex.styles';

export const LayoutBaseStyled = styled.div`
  display:flex;
  width:100%;
  height:100%;
  background: rgb(72,50,150);
  background: linear-gradient(214deg, rgba(72,50,150,1) 0%, rgba(17,8,51,1) 34%, rgba(17,8,51,1) 65%, rgba(48,29,117,1) 94%, rgba(70,44,165,1) 100%); 
`

export const FrameStyled = styled.div`
  width:100%;
  height:100%;
  color:white;
  overflow:hidden;
`

export const FrameGameStyled = styled.div`
  position: relative;
  width:100%;
  height:100%;
  color:white;
  overflow:hidden;
`

export const MediumWrapperStyled = styled.div`
  width: 100%;
  max-width:920px;
  margin: 0 auto;
  height: 100%;
`


export const FrameLoadingStyled = styled.div`
  display:flex;
  width:100%;
  height:100%;
  align-items:center;
  justify-content: center;
`

export const FrameIndicatorsStyled = styled.div`
  position: absolute;
  width:100%;
  height:100%;
  top: 0;
  left: 0;
  z-index: ${zi.indicators};
`

export const NotificationLayerStyled = styled.div`
  position: absolute;
  width:100%;
  height:100%;
  top: 0;
  left: 0;
  z-index: ${zi.notifications};
`