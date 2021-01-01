const hotkeys = require('~/utils/hotkeys/hotkeys.common.js');

import { TeamsState, Team } from '~/context/teams.types.ts'
import { TeamsContextProps } from '~/context/Teams.context'

class TeamsService {

  flagKeys = false

  // constructor() { }

  initBuzzers(teamsCtxt: TeamsContextProps): void {
    if (!this.flagKeys) {
      this.flagKeys = true
      teamsCtxt.state.teams.forEach(function (teamItem) {
        let elementKey = teamItem.buzzerKey
        hotkeys(elementKey, (event: any, handler: any) => {
          teamsCtxt.dispatch({ type: 'setBuzzeredTeam', payload: teamItem.id })
        });
      })
    }
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

  jumpNextTeam(teamsCtxtState: TeamsState) {
    const currentTeamId = teamsCtxtState.current.team
    let nextIndex = 0
    if (currentTeamId !== null) {
      for( let i = 0; i <= teamsCtxtState.teams.length-1; i++){
        if( teamsCtxtState.teams[i].id === currentTeamId ){
          if( i === teamsCtxtState.teams.length-1 ){
            nextIndex = 0
          }
          else{
            nextIndex = i + 1
          }
        }
      }
    }
    teamsCtxtState.current.team = teamsCtxtState.teams[nextIndex].id
  }

}

export default TeamsService