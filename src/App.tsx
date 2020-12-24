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

import {
  LayoutBaseStyled,
} from '~/components/layout/layout.index'

import FrameIntro from '~/components/frames/frame-intro/frame-intro.index';
import FrameGame from '~/components/frames/frame-game/frame-game.index';

import {

} from '~/components/sandbox/layout-all.styles';

// @ts-ignore
const SUBDIR = ___SUBDIR___;

function App() {

  const themeContext = useThemeContext();

  // @ts-ignore // todo Issue?
  const themeProps: ThemeProps = themeContext.themeState

  new CoreService()


  return (
    <ThemeProvider theme={themeProps}>
      <Router basename={`${SUBDIR}`} >
        <LayoutBaseStyled>
          <FrameGame />
        </LayoutBaseStyled>
      </Router>
    </ThemeProvider>
  );
}

export default hot(module)(App);

/*


        <Switch>
          <Route path="/" component={FrameIntro} />
        </Switch>


  <Route path="/lesson/:lessonId/:exerciseId?" component={Lesson} />
  <Route path="/trainer/:trainerId" component={Trainer} />
*/