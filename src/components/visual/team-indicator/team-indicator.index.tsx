import React, { ReactElement } from 'react'

import { useTeamsContext } from '~/context/Teams.context'
import CoreService from '~/services/CoreService/CoreService';

import {
  TeamIndicatorStyled,
  TeamColorStyled
} from "./team-indicator.styles";


const TeamIndicator = (): ReactElement | null => {

  const core = CoreService.getInstance()

  const teamsContext = useTeamsContext()

  const team = core.teamsService.getCurrentTeam(teamsContext.state)

  return (
    <TeamIndicatorStyled data-cy="team-indicator" >
      <TeamColorStyled color={team && team.color} />
    </TeamIndicatorStyled >
  )
};

export default TeamIndicator
