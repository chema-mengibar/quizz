import React, { ReactElement } from 'react'

import { useGameContext } from '~/context/Game.context'
import { useTeamsContext } from '~/context/Teams.context'
import CoreService from '~/services/CoreService/CoreService';

import {
  TeamIndicatorStyled,
  RoundsStyled,
  TeamColorStyled
} from "./team-indicator.styles";


const TeamIndicator = (): ReactElement | null => {

  const core = CoreService.getInstance()
  const teamsContext = useTeamsContext()
  const gameContext = useGameContext()

  const team = core.teamsService.getCurrentTeam(teamsContext.state)

  return (
    <TeamIndicatorStyled data-cy="team-indicator" >
      <RoundsStyled>
        {gameContext.state.cursorRound + 1}:
        {gameContext.state.cursorTurn + 1}:
        {gameContext.state.cursorQuiz + 1}
      </RoundsStyled>
      <TeamColorStyled color={team && team.color}>{ team ? team.name : ''}</TeamColorStyled>
    </TeamIndicatorStyled >
  )
};

export default TeamIndicator
