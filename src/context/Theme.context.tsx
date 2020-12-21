import React from 'react'

import {themeDefault, themeKids} from '~/styles/theme/theme.styles'
import {AppTheme} from '~/styles/theme/theme.styles'

export interface ThemeProps {
  props: AppTheme,
  mode: string
}

export interface ContextProps {
  themeState : ThemeProps,
  themeDispatch: any
}


const ThemeContext  = React.createContext<ContextProps | null>(null)


const themeConfigs = [
  [themeDefault, 'default'],
  [themeKids, 'kids'],
]

const selectedThemeIdx = 0 //change 0|1 to switch the theme: default,kids

const initialState: ThemeProps = {
  props: themeConfigs[selectedThemeIdx][0] as AppTheme,
  mode: themeConfigs[selectedThemeIdx][1] as string,
};


export function useThemeContext () {
  return React.useContext(ThemeContext)
}


let reducer = (state: any, action: any) => {
  switch (action.type) {
    case "toggle":
      return { 
        ...state, 
        mode: (state.mode === 'default') ? 'kids' : 'default',
        props: (state.mode === 'default') ? themeKids : themeDefault
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
  const value: ContextProps = { 
    themeState: state, 
    themeDispatch: dispatch 
  }

  return (
    // @ts-ignore
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
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