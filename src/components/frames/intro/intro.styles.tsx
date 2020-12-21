import styled, {css} from "styled-components";
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



export const IntroStyled = styled.div`
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
   
`;
