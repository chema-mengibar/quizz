import React, { ReactElement, useEffect, useState } from 'react'

import {
  MediumWrapperStyled,
} from '~/components/layout/layout.index'
import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'
import {GXHeaderContainerStyled,
  GXBodyContainerStyled,
  GXContainerStyled,
  GXFootersContainerStyled,
  GXQuestionImageStyled,
  GXQuestionMonitorStyled,
  GXAnswerStyled,
  GXAnswerKeyStyled,
} from '~/components/games/shared/games.styles'

import {
  GX4QuestionStyled,
  CopyQestionStyled,
  GX4AnwersContainerStyled,
  GX4AnwerColumnStyled,
  GX4TimerColumnStyled,
  GX4TimerStyled,
  GX4TimerCounterStyled,
} from "./game-x4.styles";
import { GameX4Props, } from "./game-x4.types";


const GameX4 = ({ dataCY, quiz }: GameX4Props): ReactElement => {

  const gameContext = useGameContext()
  const teamsContext = useTeamsContext()

  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(null)
  const [isResolved, setIsResolved] = useState<boolean>(false)

  const [showQuestion, setShowQuestion] = useState<boolean>(false)
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const solutionItemsLeft = quiz.options.slice(0, 2)
  const solutionItemsRight = quiz.options.slice(2, 4)


  useEffect(() => {
    setShowQuestion(true)
    setTimeout(() => {
      setShowOptions(true)
      setTimeout(() => {
        gameContext.dispatch({ type: 'stepSetPlaying' })
      }, 4000)
    }, 2000)
    return ()=>{
      setSelectedOptionKey(null)
      setIsResolved(false)
      setShowQuestion(false)
      setShowOptions(false)
    }
  }, [quiz])

  const points = 100;

  const imagePath = './static/images/quizzes/'

  function onClickOption(optionKey: string): void {
    setIsResolved(false)
    setSelectedOptionKey(optionKey)
    setTimeout(() => {
      setIsResolved(true)

      if (quiz.solutionOptionKey === optionKey) {
        gameContext.dispatch({ type: 'notySuccess' })
        teamsContext.dispatch({
          type: 'setBuzzeredTeamPoints',
          payload: points
        })

      } else {
        gameContext.dispatch({ type: 'notyError' })
      }
      setTimeout(() => {
        gameContext.dispatch({ type: 'notyReset' })
        gameContext.dispatch({ type: 'next' })
      }, 2000)
    }, 1000)

  }

  return (
    <GXContainerStyled data-cy={dataCY}>

      <GXHeaderContainerStyled>
        <MediumWrapperStyled>
          {showQuestion && <GX4QuestionStyled>
            <CopyQestionStyled>
              {quiz.question}
            </CopyQestionStyled>
          </GX4QuestionStyled>}
        </MediumWrapperStyled>
      </GXHeaderContainerStyled>

      { showQuestion && quiz.source && quiz.source !== '' &&
        <GXBodyContainerStyled>
          <MediumWrapperStyled>
           <GXQuestionMonitorStyled>
               <GXQuestionImageStyled
                style={{ backgroundImage: `url(${imagePath}${quiz.source})` }} />
            </GXQuestionMonitorStyled>
          </MediumWrapperStyled>
        </GXBodyContainerStyled>
      }

      <GXFootersContainerStyled>
        <MediumWrapperStyled>
          <GX4AnwersContainerStyled>
            <GX4AnwerColumnStyled>
              {
                showOptions && solutionItemsLeft.map((item, idx) => {
                  return (<GXAnswerStyled
                    className={`delay_0-${idx}`}
                    key={`gx4-option-${item.key}`}
                    isSelected={selectedOptionKey === item.key}
                    isOk={isResolved && quiz.solutionOptionKey === item.key}
                    onClick={() => {
                      onClickOption(item.key)
                    }}>
                    <GXAnswerKeyStyled>{item.key}</GXAnswerKeyStyled>
                    <p>{item.value}</p>
                  </GXAnswerStyled>)
                })
              }
            </GX4AnwerColumnStyled>
            {quiz.timeSeconds !== undefined &&
              <GX4TimerColumnStyled>
                <GX4TimerStyled >
                  {quiz.timeSeconds}
                  <GX4TimerCounterStyled />
                </GX4TimerStyled>
              </GX4TimerColumnStyled>
            }
            <GX4AnwerColumnStyled>
              {
                showOptions && solutionItemsRight.map((item, idx) => {
                  return (<GXAnswerStyled
                    className={`delay_1-${idx}`}
                    key={`gx4-option-${item.key}`}
                    isSelected={selectedOptionKey === item.key}
                    isOk={isResolved && quiz.solutionOptionKey === item.key}
                    onClick={() => {
                      onClickOption(item.key)
                    }}>
                    <GXAnswerKeyStyled>{item.key}</GXAnswerKeyStyled>
                    <p>{item.value}</p>
                  </GXAnswerStyled>)
                })
              }
            </GX4AnwerColumnStyled>
          </GX4AnwersContainerStyled>
        </MediumWrapperStyled>
      </GXFootersContainerStyled>

    </GXContainerStyled>
  )
};

export default GameX4
