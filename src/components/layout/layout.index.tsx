
import styled, { css } from "styled-components";
import theme from 'styled-theming';

import {device} from '~/utils/media/media.index';
import bl from '~/styles/shared/baseline.styles';
import zi from '~/styles/shared/zindex.styles';

export const LayoutBaseStyled = styled.div`
  width:100%;
  height:100%;
  background: rgb(72,50,150);
  background: linear-gradient(214deg, rgba(72,50,150,1) 0%, rgba(17,8,51,1) 34%, rgba(17,8,51,1) 65%, rgba(48,29,117,1) 94%, rgba(70,44,165,1) 100%); 
`

export const MediumWrapperStyled = styled.div`
  width: 100%;
  max-width:980px;
  height: 100%;
  margin: 0 auto;

  &.flexHorizontal{
    display: flex;
    flex-direction:column;
    
    ${device.tablet(css`
      flex-direction:row;
    `)} 
  }
`

export const SidebarStyled = styled.div`
  height:100%;
  width: 200px;
  background-color: red;
`

export const MainStyled = styled.div`
  height:100%;
  flex: 1;
`

export const MainContentStyled = styled.div`
  height: 75%;
  width:100%;
`

export const MainFooterStyled = styled.div`
  height: 25%;
  width:100%;
`

export const FrameLoadingStyled = styled.div`
  display:flex;
  width:100%;
  height:100%;
  align-items:center;
  justify-content: center;
`

export const NotificationLayerStyled = styled.div`
  position: absolute;
  width:100%;
  height:100%;
  top: 0;
  left: 0;
  z-index: ${zi.notifications};
`