import React, {ReactElement} from 'react'

import {
 	GameLoadingStyled,
} from "./game-loading.styles";

const GameLoading = (): ReactElement => {

  return (
    <GameLoadingStyled data-cy="game-loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </GameLoadingStyled>
  )
 };

export default GameLoading
