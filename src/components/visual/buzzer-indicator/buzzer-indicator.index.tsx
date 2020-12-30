import React, {ReactElement} from 'react'

import { GameSteps } from '~/context/game.types'
import { useGameContext } from '~/context/Game.context';
import CoreService from '~/services/CoreService/CoreService';

import {
   BuzzerIndicatorStyled,
   StepColorStyled
} from "./buzzer-indicator.styles";
import {  BuzzerIndicatorProps, } from "./buzzer-indicator.types";


const BuzzerIndicator = (): ReactElement => {

  const core = CoreService.getInstance()

  const gameContext = useGameContext()

  function mapStepToColor( step: GameSteps ): string{
    switch (step) {
      case GameSteps.playing:
        return 'green'
        break;
      default:
        return 'red';
    }  
  }

  return (
    <BuzzerIndicatorStyled data-cy="buzzer-indicator">
      <StepColorStyled 
        color={mapStepToColor( gameContext.state.current.step ) }
      />
    </BuzzerIndicatorStyled>
  )
 };

export default BuzzerIndicator
