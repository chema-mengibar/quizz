import React, {useEffect} from "react";
import { hot } from 'react-hot-loader';
import { ThemeProvider, css } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import CoreService from '~/services/CoreService/CoreService'
import { useThemeContext, ThemeProps } from '~/context/Theme.context';
import { useAppContext } from '~/context/App.context';

import ReactCtxInit from '~/components/sandbox/react-ctx-init/react-ctx-init.index'
import { LayoutBaseStyled, } from '~/components/layout/layout.index'
import FrameIntro from '~/components/frames/frame-intro/frame-intro.index';
import FrameGame from '~/components/frames/frame-game/frame-game.index';
import FrameDev from '~/components/frames/frame-dev/frame-dev.index';
import FrameRanking from '~/components/frames/frame-ranking/frame-ranking.index';

// @ts-ignore
const SUBDIR = ___SUBDIR___;

function App() {

  const themeContext = useThemeContext();

  // @ts-ignore // todo Issue?
  const themeProps: ThemeProps = themeContext.themeState

  const core = new CoreService()

  core.gameService.prepareRounds()

  return (
    <ThemeProvider theme={themeProps}>
      <Router basename={`${SUBDIR}`} >
        <LayoutBaseStyled>
          <ReactCtxInit />
          <Switch>
            <Route path="/dev" component={FrameDev} />
            <Route path="/ranking" component={FrameRanking} />
            <Route path="/play" component={FrameGame} />
            <Route path="/" component={FrameIntro} />
          </Switch>
        </LayoutBaseStyled>
      </Router>
    </ThemeProvider>
  );
}

export default hot(module)(App);

/*
USAGE:


      { loaded && <Redirect to="/ranking" />  }

<Route path="/lesson/:lessonId/:exerciseId?" component={Lesson} />
<Route path="/trainer/:trainerId" component={Trainer} />
*/