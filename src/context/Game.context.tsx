import React from 'react'

import CoreService from '~/services/CoreService/CoreService'
import { useTeamsContext, TeamsContextProps } from '~/context/Teams.context'

import {
  GameState, GameSteps, NotyTypes
} from './game.types'

export interface GameContextProps {
  state: GameState,
  dispatch: any
}


const GameContext = React.createContext<GameContextProps | null>(null)
let teamsContext: TeamsContextProps


const initialState: GameState = {
  noty: null,
  cursorRound: 0,
  cursorTurn: 0,
  cursorQuiz: 0,
  cursorRoundQuiz: 0,
  current: {
    step: GameSteps.pause
  },
  endGame: false
};


export function useGameContext() {
  return React.useContext(GameContext)
}


let reducer = (state: any, action: any) => {
  const core = CoreService.getInstance()
  const currentState = { ...state }

  switch (action.type) {

    case 'prepareBuzzers':
      core.gameService.initPlayTeam(currentState, teamsContext)
      return currentState;
    case "next":
      core.gameService.setNextQuiz(currentState, teamsContext)
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
    case "stepSetPlaying":
      currentState.current.step = GameSteps.playing
      core.gameService.buzzered(currentState, teamsContext)
      return currentState
      break;
    case "notySuccess":
      currentState.noty = {
        type: NotyTypes.success,
      }
      return currentState
      break;
    case "notyError":
      currentState.noty = {
        type: NotyTypes.error,
      }
      return currentState
      break;
    case "notyMessage":
      currentState.noty = {
        type: NotyTypes.message,
        message: action.payload
      }
      return currentState
      break;
    case "notyReset":
      currentState.noty = null
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