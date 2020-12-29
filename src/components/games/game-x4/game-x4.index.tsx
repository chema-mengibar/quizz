import React, { ReactElement, useEffect, useState } from 'react'

import {
  MediumWrapperStyled,
} from '~/components/layout/layout.index'
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

  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(null)
  const [isResolved, setIsResolved] = useState<boolean>(false)

  const solutionItemsLeft = quiz.options.slice(0, 2)
  const solutionItemsRight = quiz.options.slice(2, 4)


  function onClickOption(optionKey: string): void {
    setIsResolved(false)
    setSelectedOptionKey(optionKey)
    setTimeout(() => {
      setIsResolved(true)
      setTimeout(() => {
        setIsResolved(false)
        setSelectedOptionKey(null)
        gameContext.dispatch({ type: 'next' })
      }, 500)
    }, 1000)
  }

  return (
    <GX4ContainerStyled data-cy={dataCY}>
      <GX4HeaderContainerStyled>
        <MediumWrapperStyled>
          <GX4QuestionStyled>
            <CopyQestionStyled>
              {quiz.question}
            </CopyQestionStyled>
          </GX4QuestionStyled>
        </MediumWrapperStyled>
      </GX4HeaderContainerStyled>

      <GX4BodyContainerStyled>
        <MediumWrapperStyled>
          <GX4QuestionMonitorStyled>
            <GX4QuestionImageStyled style={{ backgroundImage: `url(${quiz.source})` }} />
          </GX4QuestionMonitorStyled>
        </MediumWrapperStyled>
      </GX4BodyContainerStyled>

      <GX4FootersContainerStyled>
        <MediumWrapperStyled>
          <GX4AnwersContainerStyled>
            <GX4AnwerColumnStyled>
              {
                solutionItemsLeft.map(item => {
                  return (<GX4AnswerStyled
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
                solutionItemsRight.map(item => {
                  return (<GX4AnswerStyled
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
