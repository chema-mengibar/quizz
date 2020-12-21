import styled, {css} from "styled-components";
import theme from 'styled-theming';

import bl from '~/styles/shared/baseline.styles';

export const LayoutBaseStyled = styled.div`
  display:flex;
  width:100%;
  height:100%;
  background: rgb(72,50,150);
  background: linear-gradient(214deg, rgba(72,50,150,1) 0%, rgba(17,8,51,1) 34%, rgba(17,8,51,1) 65%, rgba(48,29,117,1) 94%, rgba(70,44,165,1) 100%); 
`

export const FrameStyled = styled.div`
  display:flex;
  width:100%;
  height:100%;
`



export const MediumWrapperStyled = styled.div`
  width: 100%;
  max-width:768px;
  margin: 0 auto;
  height: 100%;
`




export const Qx4ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Qx4HeaderContainerStyled = styled.div`
  height: ${bl._m8};
`

export const Qx4BodyContainerStyled = styled.div`
  min-height:200px;
  flex:1;
  width:100%;
`

export const Qx4FootersContainerStyled = styled.div`
  width:100%;
  height: ${bl._m8};
`



export const Qx4QuestionStyled = styled.div`
  display:flex;
  height: 100%;
  align-items: center;

`


export const CopyQestionStyled = styled.div`
  color: white;
  font-size: 32px;
  width:100%;
  text-align:center;
  
`





// Roboto











/*

  background: rgb(70,44,165);
  background: linear-gradient(212deg, rgba(70,44,165,1) 0%, rgba(72,50,150,1) 23%, rgba(17,8,51,1) 53%, rgba(72,50,150,1) 80%, rgba(70,44,165,1) 100%);


background: rgb(72,50,150);
background: linear-gradient(180deg, rgba(72,50,150,1) 0%, rgba(17,8,51,1) 40%, rgba(17,8,51,1) 67%, rgba(70,44,165,1) 93%, rgba(72,50,150,1) 100%);


  display: flex;
  flex-direction:column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.props.color.textContrast._};
  background: linear-gradient(
    344deg,
    ${props => props.theme.props.color.primary._} 0%,
    ${props => props.theme.props.color.primary.d1} 100%
  );


import theme from 'styled-theming';

export const themedBg = theme('mode', {
  default: css`
    background: linear-gradient(
      344deg,
      ${props => props.theme.props.color.primary._} 0%,
      ${props => props.theme.props.color.primary.d1} 100%
    );
  ` ,
  kids:  css`
   background: linear-gradient(
      344deg,
      yellow 0%,
      orange 100%
    );
  ` 
});


*/
