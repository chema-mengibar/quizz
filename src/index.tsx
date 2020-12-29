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

ReactDOM.render(
  <AppContextProvider>
    <TeamsContextProvider>
      <GameContextProvider>
        <ThemeContextProvider>
          <GlobalStyles />
          <App />
        </ThemeContextProvider>
      </GameContextProvider>
    </TeamsContextProvider>
  </AppContextProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
