import React, {ReactElement} from 'react'

import { useTeamsContext } from '~/context/Teams.context';
import CoreService from '~/services/CoreService/CoreService';

import {
   BuzzerIndicatorStyled,
   StepColorStyled
} from "./buzzer-indicator.styles";
import {  BuzzerIndicatorProps, } from "./buzzer-indicator.types";


const BuzzerIndicator = (): ReactElement => {

  const core = CoreService.getInstance()

  const teamsContext = useTeamsContext()

  function mapStepToColor( buzzerAllowedFlag: boolean ): string{
    return buzzerAllowedFlag ? 'green' : 'red'
  }

  return (
    <BuzzerIndicatorStyled data-cy="buzzer-indicator">
      <StepColorStyled 
        color={mapStepToColor( teamsContext.state.current.buzzerAllowed ) }
      />
    </BuzzerIndicatorStyled>
  )
 };

export default BuzzerIndicator
