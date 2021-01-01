import React from 'react'

import CoreService from '~/services/CoreService/CoreService'

import {
  TimerState, TimerStatus
} from './timer.types'

export interface TimerContextProps {
  state: TimerState,
  dispatch: any
}

const TimerContext = React.createContext<TimerContextProps | null>(null)

const initialState: TimerState = {
  timeInSeconds: 0,
  status: TimerStatus.ready
};

export function useTimerContext() {
  return React.useContext(TimerContext)
}

let reducer = (state: any, action: any) => {
  const core = CoreService.getInstance()
  const currentState = { ...state }
  switch (action.type) {
    case "setTime":
      console.log( action.payload )
      currentState.timeInSeconds = action.payload
      return currentState
    default:
      return state;
  }
};


type Props = {
  children: React.ReactNode
};

export function TimerContextProvider({ children }: Props) {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value: TimerContextProps = { state, dispatch }

  return (
    // @ts-ignore
    <TimerContext.Provider value={value}>
      {children}
    </TimerContext.Provider>
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
