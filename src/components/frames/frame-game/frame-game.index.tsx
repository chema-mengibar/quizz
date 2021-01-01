import React, { ReactElement, useState, useEffect } from 'react'

import { GameSteps } from '~/context/game.types'
import { GameTypes } from '~/services/GameService/game-service.types'

import CoreService from '~/services/CoreService/CoreService'

import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'

import {
  FrameGameStyled,
  FrameLoadingStyled,
  FrameIndicatorsStyled,
  NotificationLayerStyled
} from '~/components/layout/layout.index'
import GameX4 from '~/components/games/game-x4/game-x4.index'
import GameX1 from '~/components/games/game-x1/game-x1.index'
import GameWords from '~/components/games/game-words/game-words.index'
import GameLoading from '~/components/visual/game-loading/game-loading.index'
import TeamIndicator from '~/components/visual/team-indicator/team-indicator.index'
import BuzzerIndicator from '~/components/visual/buzzer-indicator/buzzer-indicator.index'
import Notification from '~/components/visual/notification/notification.index'

const FrameGame = (): ReactElement => {

  const [quiz, setQuiz] = useState(null);

  const gameContext = useGameContext()
  const teamsContext = useTeamsContext()

  const core = CoreService.getInstance()

  core.teamsService.initBuzzers(teamsContext)


  function loadCurrentQuiz() {
    gameContext.dispatch({ type: 'stepSetPrepare' })

    setTimeout(() => {
      const currentQuiz = core.gameService.getQuiz(gameContext.state)
      gameContext.dispatch({ type: 'prepareBuzzers' })
      setQuiz(currentQuiz)
      setTimeout(() => {
        gameContext.dispatch({ type: 'stepSetAsking' })
      }, 100)
    }, 500)
  }

  useEffect(() => {
    loadCurrentQuiz()
  }, [gameContext.state.cursorRoundQuiz])


  return (
    <FrameGameStyled>
      {gameContext.state.current.step === GameSteps.prepare &&
        <FrameLoadingStyled>
          <GameLoading />
        </FrameLoadingStyled>
      }
      {gameContext.state.current.step >= GameSteps.asking &&
        <>
          <FrameIndicatorsStyled>
            <TeamIndicator />
            <BuzzerIndicator />
          </FrameIndicatorsStyled>

          {quiz && quiz.type === GameTypes.x4 &&
            <GameX4 quiz={quiz} />
          }
          {quiz && quiz.type === GameTypes.x1 &&
            <GameX1 quiz={quiz} />
          }
          {quiz && quiz.type === GameTypes.words &&
            <GameWords quiz={quiz} />
          }
        </>
      }
      {gameContext.state.noty && <NotificationLayerStyled>
        <Notification />
      </NotificationLayerStyled>}


    </FrameGameStyled>
  )
};

export default FrameGame
