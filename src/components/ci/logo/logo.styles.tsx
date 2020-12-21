import styled, { css } from "styled-components";

export const LogoStyled = styled.div<{size:number}>`
  display: flex;
  align-items: center;
  width:${({size})=> size}px;
  flex-direction:row;
`;

export const PathStyled = styled.path`
  fill: ${({color})=> color};
` ;

export const PolygonStyled = styled.polygon`
  fill: ${({color})=> color};
` ;

export const SvgStyled = styled.svg`
  enable-background:new 0 0 512 512;
` ;
