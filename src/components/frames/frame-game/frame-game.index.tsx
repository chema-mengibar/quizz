import React, { ReactElement, useState, useEffect } from 'react'

import { GameSteps } from '~/context/game.types'
import { GameTypes } from '~/services/GameService/game-service.types'

import CoreService from '~/services/CoreService/CoreService'

import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'

import {
  FrameGameStyled,
  FrameLoadingStyled,
  FrameIndicatorsStyled
} from '~/components/layout/layout.index'
import GameX4 from '~/components/games/game-x4/game-x4.index'
import GameLoading from '~/components/visual/game-loading/game-loading.index'
import TeamIndicator from '~/components/visual/team-indicator/team-indicator.index'

const FrameGame = (): ReactElement => {

  const [quiz, setQuiz] = useState(null);

  const gameContext = useGameContext()
  const teamsContext = useTeamsContext()

  const core = CoreService.getInstance()

  core.gameService.initBuzzers( teamsContext, gameContext )


  function loadCurrentQuiz() {
    gameContext.dispatch({ type: 'stepSetPrepare' })
   
    setTimeout(() => {
      const currentQuiz = core.gameService.getQuiz(gameContext.state)
      setQuiz(currentQuiz)
      setTimeout(() => {
        gameContext.dispatch({ type: 'stepSetAsking' })
      }, 100)
    }, 500)
  }

  useEffect(() => {
    loadCurrentQuiz()
  }, [gameContext.state.current.quiz])


  return (
    <FrameGameStyled>

      {gameContext.state.current.step === GameSteps.prepare &&
        <FrameLoadingStyled>
          <GameLoading />
        </FrameLoadingStyled>
      }
      {gameContext.state.current.step === GameSteps.asking &&
        <>
          <FrameIndicatorsStyled>
            <TeamIndicator />
          </FrameIndicatorsStyled>

          {quiz && quiz.type === GameTypes.x4 &&
            <GameX4 quiz={quiz} />
          }
        </>
      }

    </FrameGameStyled>
  )
};

export default FrameGame
