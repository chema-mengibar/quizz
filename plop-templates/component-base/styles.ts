import styled, { css } from "styled-components";

import media from '~/utils/media/media.index';

import {  {{> MyName }}Props, } from "./{{> my-name }}.types";

export const {{> MyName }}Styled = styled.div<{{> MyName }}Props>`
  // CSS here

  ${({id}) => id && css`
    // CSS here
  `}

`;
