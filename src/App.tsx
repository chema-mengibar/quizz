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

import FrameIntro from '~/components/frames/frame-intro/frame-intro.index';
import {
  LayoutBaseStyled,
  FrameStyled,
  MediumWrapperStyled,
  Qx4ContainerStyled,
  Qx4HeaderContainerStyled,
  Qx4BodyContainerStyled,
  Qx4FootersContainerStyled,
  Qx4QuestionStyled,
  CopyQestionStyled

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
          <FrameStyled>

            <Qx4ContainerStyled>

              <Qx4HeaderContainerStyled>
                <MediumWrapperStyled>
                  <Qx4QuestionStyled>
                    <CopyQestionStyled>Cual es el nombre del personaje?</CopyQestionStyled>
                  </Qx4QuestionStyled>
                  
                </MediumWrapperStyled>
              </Qx4HeaderContainerStyled>

              <Qx4BodyContainerStyled>
                <div>

                </div>
              </Qx4BodyContainerStyled>

              <Qx4FootersContainerStyled>
                <MediumWrapperStyled>
                  Cual es el nombre del personaje?
                </MediumWrapperStyled>
              </Qx4FootersContainerStyled>

            </Qx4ContainerStyled>
          </FrameStyled>
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