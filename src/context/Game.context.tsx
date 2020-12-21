import React from 'react'

export interface GameProps {
  idx: number
  props: any | null,
}

export interface GameContextProps {
  gameState : GameProps,
  gameDispatch: any
}


const GameContext  = React.createContext<GameContextProps | null>(null)

const initialState: GameProps = {
  props: null,
  idx: 0
};


export function useGameContext () {
  return React.useContext(GameContext)
}


let reducer = (state: any, action: any) => {
  switch (action.type) {
    case "next":

      // increment idx and get next game
      const gameFromIdxProps = {}
      return { 
        ...state, 
        idx: state.idx++,
        props: gameFromIdxProps
      }
    default:
      return state;
   
  }
};


type Props = {
  children: React.ReactNode
};

export function ThemeContextProvider({  children }: Props){

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value: GameContextProps = { 
    gameState: state, 
    gameDispatch: dispatch 
  }

  return (
    // @ts-ignore
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}


/*

import {useThemeContext} from '~/context/Theme.context'

const themeContext = useThemeContext()

themeContext.themeDispatch({ type: "toggle", payload: {}})

themeContext.themeState.props.text._


  useEffect(()=>{
    setTimeout(()=>{
      themeContext.themeDispatch({ type: "toggle"})
    },2000)
  }, [])

*/