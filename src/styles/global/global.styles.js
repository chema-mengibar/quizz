import styled, {createGlobalStyle, css} from "styled-components";
import theme from 'styled-theming';

import resetCss from './reset.styles'
import {fontCssGlobal} from './fonts.styles'

export const GlobalStyles = createGlobalStyle`

  ${resetCss}
  ${fontCssGlobal}
  

  html, body {
    height: 100%;
  }

  #app, #root{
    display: flex;
    flex-direction: column;
    min-height:100%;
    height: 100%;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }

`
