import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';


import App from './App';
import * as serviceWorker from './serviceWorker';

import {GlobalStyles} from '~/styles/global/global.styles'
import  { AppContextProvider } from '~/context/App.context'
import { ThemeContextProvider } from '~/context/Theme.context'

ReactDOM.render(
  <AppContextProvider>
    <ThemeContextProvider>
      <GlobalStyles />
      <App />
    </ThemeContextProvider>
  </AppContextProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
