import React, { ReactElement, useState, useEffect } from 'react'

import { GameSteps } from '~/context/game.types'
import { GameTypes } from '~/services/GameService/game-service.types'

import CoreService from '~/services/CoreService/CoreService'

import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'


import {
  MediumWrapperStyled,
  SidebarStyled,
  MainStyled,
  MainContentStyled,
  MainFooterStyled
} from '~/components/layout/layout.index'
// import GameX4 from '~/components/games/game-x4/game-x4.index'
// import GameX1 from '~/components/games/game-x1/game-x1.index'
// import GameWords from '~/components/games/game-words/game-words.index'
// import GameLoading from '~/components/visual/game-loading/game-loading.index'
// import TeamIndicator from '~/components/visual/team-indicator/team-indicator.index'
// import BuzzerIndicator from '~/components/visual/buzzer-indicator/buzzer-indicator.index'
// import Notification from '~/components/visual/notification/notification.index'

import {
  QuestionContainerStyled,
  QuestionMonitorStyled
} from '~/components/games/shared/dev-layout.styles'

const FrameDev = (): ReactElement => {

  const [quiz, setQuiz] = useState(null);

  const gameContext = useGameContext()
  const teamsContext = useTeamsContext()

  const core = CoreService.getInstance()


  return (
    <MediumWrapperStyled className="flexHorizontal">
      <SidebarStyled> 
        sidebar
      </SidebarStyled>
      <MainStyled>
        <MainContentStyled data-layout="content">
          <QuestionContainerStyled data-layout="content-top">
            Quien era Mortadelo?
          </QuestionContainerStyled>
          <QuestionContainerStyled data-layout="content-bottom">
            <QuestionMonitorStyled >

            </QuestionMonitorStyled>
          </QuestionContainerStyled>
        </MainContentStyled>
        <MainFooterStyled data-layout="footer">

        </MainFooterStyled>
      </MainStyled>
    </MediumWrapperStyled>
  )
};

export default FrameDev
