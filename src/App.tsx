import React from "react";
import { ThemeProvider, css } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route   
} from "react-router-dom";
import { hot } from 'react-hot-loader';

import CoreService from '~/services/CoreService/CoreService'
import { useThemeContext, ThemeProps } from '~/context/Theme.context';

import Intro from './components/frames/intro/intro.index'

// @ts-ignore
const SUBDIR =___SUBDIR___;

function App() {

  const themeContext = useThemeContext();

  // @ts-ignore // todo Issue?
  const themeProps: ThemeProps  = themeContext.themeState 

  new CoreService()
 

  return (
    <ThemeProvider theme={themeProps}>
      <Router basename={`${SUBDIR}`} >
        <Switch>
            <Route path="/" component={Intro} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default hot(module)(App);

/*
  <Route path="/lesson/:lessonId/:exerciseId?" component={Lesson} />
  <Route path="/trainer/:trainerId" component={Trainer} />
*/