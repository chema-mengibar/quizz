import React from 'react'

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
  const stateNow = { ...state }
  switch (action.type) {
    case "change":
      stateNow.current.team = TeamIds.b
      return stateNow
    case "changeNoTeam":
      stateNow.current.team = null
      return stateNow
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