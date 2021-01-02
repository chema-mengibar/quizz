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
  currentTime: 0,
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
      currentState.status = TimerStatus.ready
      currentState.timeInSeconds = action.payload
      currentState.currentTime = action.payload
      return currentState
    case "dec":
      if( currentState.status === TimerStatus.counting ){
        currentState.currentTime = currentState.currentTime -1
      }
      return currentState
    case "startTimer":
      currentState.status = TimerStatus.start
      return currentState
    case "setStatusStart":
      currentState.status = TimerStatus.start
      return currentState
    case "setStatusCounting":
      currentState.status = TimerStatus.counting
      return currentState
    case "setStatusPause":
      currentState.status = TimerStatus.pause
      return currentState
    case "setStatusEnd":
      currentState.status = TimerStatus.end
      return currentState
    case "setStatusReady":
      currentState.status = TimerStatus.ready
      return currentState
    case "reStart":
      currentState.currentTime = currentState.timeInSeconds
      currentState.status = TimerStatus.ready
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
