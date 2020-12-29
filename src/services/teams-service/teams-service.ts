import { TeamsState, Team } from '~/context/teams.types.ts'

class TeamsService {

  constructor() {

  }

  getCurrentTeam(teamsCtxtState: TeamsState): Team {

    const currentTeamId = teamsCtxtState.current.team

    if (currentTeamId !== null) {
      const currentTeam = teamsCtxtState.teams.find(teamItem => {
        return teamItem.id === currentTeamId
      })
      return currentTeam !== undefined ? currentTeam : null
    }
    return null
  }
}

export default TeamsService