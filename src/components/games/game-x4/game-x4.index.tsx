import React, { ReactElement, useEffect, useState } from 'react'

import {
  MediumWrapperStyled,
} from '~/components/layout/layout.index'
import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'
import CoreService from '~/services/CoreService/CoreService';

import {
  GX4ContainerStyled,
  GX4HeaderContainerStyled,
  GX4BodyContainerStyled,
  GX4FootersContainerStyled,
  GX4QuestionStyled,
  CopyQestionStyled,
  GX4AnwersContainerStyled,
  GX4AnwerColumnStyled,
  GX4TimerColumnStyled,
  GX4AnswerStyled,
  GX4AnswerKeyStyled,
  GX4TimerStyled,
  GX4TimerCounterStyled,
  GX4QuestionMonitorStyled,
  GX4QuestionImageStyled
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
    <GX4ContainerStyled data-cy={dataCY}>

      <GX4HeaderContainerStyled>
        <MediumWrapperStyled>
          {showQuestion && <GX4QuestionStyled>
            <CopyQestionStyled>
              {quiz.question}
            </CopyQestionStyled>
          </GX4QuestionStyled>}
        </MediumWrapperStyled>
      </GX4HeaderContainerStyled>

      { showQuestion && quiz.source && quiz.source !== '' && <GX4BodyContainerStyled>
        <MediumWrapperStyled>
         <GX4QuestionMonitorStyled>
             <GX4QuestionImageStyled
              style={{ backgroundImage: `url(${imagePath}${quiz.source})` }} />
          </GX4QuestionMonitorStyled>
        </MediumWrapperStyled>
          </GX4BodyContainerStyled>  }

      <GX4FootersContainerStyled>
        <MediumWrapperStyled>
          <GX4AnwersContainerStyled>
            <GX4AnwerColumnStyled>
              {
                showOptions && solutionItemsLeft.map((item, idx) => {
                  return (<GX4AnswerStyled
                    className={`delay_0-${idx}`}
                    key={`gx4-option-${item.key}`}
                    isSelected={selectedOptionKey === item.key}
                    isOk={isResolved && quiz.solutionOptionKey === item.key}
                    onClick={() => {
                      onClickOption(item.key)
                    }}>
                    <GX4AnswerKeyStyled>{item.key}</GX4AnswerKeyStyled>
                    <p>{item.value}</p>
                  </GX4AnswerStyled>)
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
                  return (<GX4AnswerStyled
                    className={`delay_1-${idx}`}
                    key={`gx4-option-${item.key}`}
                    isSelected={selectedOptionKey === item.key}
                    isOk={isResolved && quiz.solutionOptionKey === item.key}
                    onClick={() => {
                      onClickOption(item.key)
                    }}>
                    <GX4AnswerKeyStyled>{item.key}</GX4AnswerKeyStyled>
                    <p>{item.value}</p>
                  </GX4AnswerStyled>)
                })
              }
            </GX4AnwerColumnStyled>
          </GX4AnwersContainerStyled>
        </MediumWrapperStyled>
      </GX4FootersContainerStyled>

    </GX4ContainerStyled>
  )
};

export default GameX4
