import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';


import App from './App';
import * as serviceWorker from './serviceWorker';

import { GlobalStyles } from '~/styles/global/global.styles'
import { AppContextProvider } from '~/context/App.context'
import { ThemeContextProvider } from '~/context/Theme.context'
import { GameContextProvider } from '~/context/Game.context'
import { TeamsContextProvider } from '~/context/Teams.context'
import { TimerContextProvider } from '~/context/Timer.context'

ReactDOM.render(
  <AppContextProvider>
    <TeamsContextProvider>
      <GameContextProvider>
        <TimerContextProvider>
          <ThemeContextProvider>
            <GlobalStyles />
            <App />
          </ThemeContextProvider>
        </TimerContextProvider>
      </GameContextProvider>
    </TeamsContextProvider>
  </AppContextProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
