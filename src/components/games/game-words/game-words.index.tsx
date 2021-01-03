import React, { ReactElement, useEffect, useState } from 'react'

import {
  MediumWrapperStyled,
} from '~/components/layout/layout.index'
import { useTimerContext } from "~/context/Timer.context";
import Timer from "~/components/visual/timer/timer.index";
import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'
import CoreService from '~/services/CoreService/CoreService';
import {
  GXQContainerStyled,
  GXContainerStyled,
  GXFootersContainerStyled,
  GXQuestionMonitorStyled,
  GXAnswerStyled
} from '~/components/games/shared/games.styles'

import {
  GWQuestionStyled,
  CopyQestionStyled,
  ButtonResolveStyled,
  GWWordsContainerStyled,
  GWWordsControlPanelStyled
} from "./game-words.styles";
import { GameWordsProps, } from "./game-words.types";


const GameWords = ({ dataCY, quiz }: GameWordsProps): ReactElement => {

  const gameContext = useGameContext()
  const teamsContext = useTeamsContext()
  const timerContext = useTimerContext()

  const { t } = CoreService

  const [okWords, setOkWords] = useState<string[]>([])

  const [showQuestion, setShowQuestion] = useState<boolean>(false)

  const points = 25;
  const timeSeconds = 60;

  useEffect(() => {
    timerContext.dispatch({ type: 'setTime', payload: timeSeconds })
    return () => {
      setShowQuestion(false)
      setOkWords([])
    }
  }, [quiz])


  function onWordClick(word) {
    const listWords = [...okWords]
    if (!listWords.includes(word)) {
      listWords.push(word)
    } else {
      const wordIdx = listWords.indexOf(word)
      listWords.splice(wordIdx, 1);
    }
    setOkWords(listWords)
  }

  function onClickStart() {
    setShowQuestion(true)
    timerContext.dispatch({ type: 'startTimer' })
    setTimeout(() => {
      setTimeout(() => {
        gameContext.dispatch({ type: 'stepSetPlaying' })
      }, 4000)
    }, 2000)
  }

  function onClickResolve() {
    const numWords = okWords.length
    const totalPoints = points * numWords
    teamsContext.dispatch({
      type: 'setBuzzeredTeamPoints',
      payload: totalPoints
    })
    gameContext.dispatch({ type: 'notyMessage', payload: `${totalPoints} ${t('points')}` })
    setTimeout(() => {
      gameContext.dispatch({ type: 'notyReset' })
      gameContext.dispatch({ type: 'next' })
    }, 2000)
  }

  return (
    <GXContainerStyled data-cy={dataCY}>

      <GXQContainerStyled
        className={ !showQuestion ? 'single':''}
      >
        <MediumWrapperStyled>
          <GWQuestionStyled>
            <CopyQestionStyled>
              { !showQuestion && t('prepare_team')}
              { showQuestion && <Timer />}
            </CopyQestionStyled>
          </GWQuestionStyled>
        </MediumWrapperStyled>
      </GXQContainerStyled>

      {showQuestion &&
        <GXQContainerStyled className="question">
          <MediumWrapperStyled>
            <GXQuestionMonitorStyled>
              <GWWordsContainerStyled>
                {
                  quiz.words.map((word, idx) => {
                    return (
                      <GXAnswerStyled
                        key={`word-${word}`}
                        onClick={() => {
                          onWordClick(word)
                        }}
                        className="centered"
                        isSelected={false}
                        isOk={okWords.includes(word)}
                      >{word}</GXAnswerStyled>
                    )
                  })
                }
              </GWWordsContainerStyled>
            </GXQuestionMonitorStyled>
          </MediumWrapperStyled>
        </GXQContainerStyled>
      }

      <GXFootersContainerStyled>
        <MediumWrapperStyled>
          <GWWordsControlPanelStyled>

            {!showQuestion &&
              <ButtonResolveStyled
                onClick={() => {
                  onClickStart()
                }}
              >{t('action_start')}
              </ButtonResolveStyled>
            }
            {showQuestion &&
              <ButtonResolveStyled onClick={() => {
                onClickResolve()
                }}
              >{t('action_resolve')}
              </ButtonResolveStyled>
            }
          </GWWordsControlPanelStyled>
        </MediumWrapperStyled>
      </GXFootersContainerStyled>

    </GXContainerStyled>
  )
};

export default GameWords
