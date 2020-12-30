import React from 'react'

import CoreService from '~/services/CoreService/CoreService'

import {
  TeamsState, Buzzerkeys, TeamIds
} from './teams.types'

export interface TeamsContextProps {
  state: TeamsState,
  dispatch: any
}


const TeamsContext = React.createContext<TeamsContextProps | null>(null)

const initialState: TeamsState = {
  current: {
    team: TeamIds.a,
  },
  teams: [
    {
      name: 'Lila',
      points: 0,
      color: '#df03fc',
      buzzerKey: Buzzerkeys.a,
      id: TeamIds.a
    },
    {
      name: 'Azul',
      points: 0,
      color: '#0356fc',
      buzzerKey: Buzzerkeys.b,
      id: TeamIds.b
    },
    {
      name: 'Naranja',
      points: 0,
      color: '#fc7303',
      buzzerKey: Buzzerkeys.c,
      id: TeamIds.c
    }
  ]
};


export function useTeamsContext() {
  return React.useContext(TeamsContext)
}


let reducer = (state: any, action: any) => {
  const core = CoreService.getInstance()
  const currentState = { ...state }

  switch (action.type) {
    case "resetBuzzeredTeam":
      currentState.current.team = null
      return currentState
    case "setBuzzeredTeam":
      currentState.current.team = action.payload
      return currentState
      break;
    case "jumpNextTeam":
      core.teamsService.jumpNextTeam(currentState)
      return currentState
      break;
    case "setBuzzeredTeamPoints":
      const points =  action.payload
      const team = core.teamsService.getCurrentTeam(currentState)
      if( team ){
        team.points += points
      }
      return currentState
      break;
    default:
      return state;

  }
};


type Props = {
  children: React.ReactNode
};

export function TeamsContextProvider({ children }: Props) {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value: TeamsContextProps = { state, dispatch }

  return (
    // @ts-ignore
    <TeamsContext.Provider value={value}>
      {children}
    </TeamsContext.Provider>
  );
}


/*

import {useTeamsContext} from '~/context/Teams.context'

const teamsContext = useTeamsContext()

teamsContext.dispatch({ type: "toggle", payload: {}})

teamsContext.state.props.text._


  useEffect(()=>{
    setTimeout(()=>{
      teamsContext.dispatch({ type: "toggle"})
    },2000)
  }, [])

*/