import React from 'react'

import CoreService from '~/services/CoreService/CoreService'
import { useTeamsContext, TeamsContextProps } from '~/context/Teams.context'

import {
  GameState, GameSteps
} from './game.types'

export interface GameContextProps {
  state: GameState,
  dispatch: any
}


const GameContext = React.createContext<GameContextProps | null>(null)
let teamsContext: TeamsContextProps


const initialState: GameState = {
  current: {
    round: 0,
    quiz: 0,
    step: GameSteps.pause
  }
};


export function useGameContext() {
  return React.useContext(GameContext)
}


let reducer = (state: any, action: any) => {
  const core = CoreService.getInstance()
  const currentState = { ...state }

  switch (action.type) {
    case "next":
      currentState.current.quiz = core.gameService.setNextQuiz(currentState)
      return currentState
      break;
    case "response":
      console.log('[GAME CTX] action:response', action.payload)
      return currentState
      break;
    case "stepSetPrepare":
      currentState.current.step = GameSteps.prepare
      return currentState
      break;
    case "stepSetAsking":
      currentState.current.step = GameSteps.asking
      return currentState
      break;
    default:
      return state;
  }
};


type Props = {
  children: React.ReactNode
};


export function GameContextProvider({ children }: Props) {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value: GameContextProps = { state, dispatch }

  teamsContext = useTeamsContext()

  return (
    // @ts-ignore
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}


/*

import {useGameContext} from '~/context/Game.context'

const gameContext = useGameContext()

gameContext.dispatch({ type: "toggle", payload: {}})

gameContext.state.props.text._


  useEffect(()=>{
    setTimeout(()=>{
      gameContext.dispatch({ type: "toggle"})
    },2000)
  }, [])

*/