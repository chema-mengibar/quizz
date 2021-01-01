import React, { ReactElement, useEffect, useState } from 'react'

import {
  MediumWrapperStyled,
} from '~/components/layout/layout.index'
import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'
import CoreService from '~/services/CoreService/CoreService';

import {GXHeaderContainerStyled,
  GXBodyContainerStyled,
  GXContainerStyled,
  GXFootersContainerStyled,
  GXQuestionImageStyled,
  GXQuestionMonitorStyled
} from '../shared/games.styles'

import {

  GX1QuestionStyled,
  CopyQestionStyled,
  GX1AnwersContainerStyled,
  GX1AnwerColumnStyled,
  GX1AnwerStyled,
  ButtonResolveStyled,
  ButtonPointStyled,
  GX1AnwersControlsStyled
} from "./game-X1.styles";
import { GameX1Props, } from "./game-X1.types";


const GameX1 = ({ dataCY, quiz }: GameX1Props): ReactElement => {

  const gameContext = useGameContext()
  const teamsContext = useTeamsContext()

  const {t} = CoreService

  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(null)
  const [isResolved, setIsResolved] = useState<boolean>(false)

  const [showQuestion, setShowQuestion] = useState<boolean>(false)

  useEffect(() => {
    setShowQuestion(true)
    setTimeout(() => {
      setTimeout(() => {
        gameContext.dispatch({ type: 'stepSetPlaying' })
      }, 4000)
    }, 2000)
    return ()=>{
      setIsResolved(false)
      setShowQuestion(false)
    }
  }, [quiz])

  const points = 100;

  const imagePath = './static/images/quizzes/'

  function onClickResolve(): void {
    setIsResolved(true)
  }


  function next(): void {
    setTimeout(() => {
      gameContext.dispatch({ type: 'notyReset' })
      gameContext.dispatch({ type: 'next' })
    }, 2000)
  }

  function onClickOk(): void {
    teamsContext.dispatch({
      type: 'setBuzzeredTeamPoints',
      payload: points
    })
    gameContext.dispatch({ type: 'notySuccess' })
    next()
  }

  function onClickWrong(): void {
    gameContext.dispatch({ type: 'notyError' })
    next()
  }


  return (
    <GXContainerStyled data-cy={dataCY}>

      <GXHeaderContainerStyled>
        <MediumWrapperStyled>
          {showQuestion && <GX1QuestionStyled>
            <CopyQestionStyled>
              {quiz.question}
            </CopyQestionStyled>
          </GX1QuestionStyled>}
        </MediumWrapperStyled>
      </GXHeaderContainerStyled>

      { showQuestion && quiz.source && quiz.source !== '' &&
        <GXBodyContainerStyled>
          <MediumWrapperStyled>
          <GXQuestionMonitorStyled>
              <GXQuestionImageStyled style={{ backgroundImage: `url(${imagePath}${quiz.source})` }} />
            </GXQuestionMonitorStyled>
          </MediumWrapperStyled>
        </GXBodyContainerStyled>
      }

      <GXFootersContainerStyled>
        <MediumWrapperStyled>
          <GX1AnwersContainerStyled>
            {isResolved && <GX1AnwerStyled>{quiz.solution}</GX1AnwerStyled>}
            <ButtonResolveStyled onClick={()=>{
              onClickResolve()
            }}>{t('action_resolve')}</ButtonResolveStyled>
          </GX1AnwersContainerStyled>
          <GX1AnwersControlsStyled>
            <GX1AnwerColumnStyled>
              <ButtonPointStyled className="ok" onClick={()=>{
                onClickOk()
              }}>👍</ButtonPointStyled>
            </GX1AnwerColumnStyled>
            <GX1AnwerColumnStyled>
              <ButtonPointStyled className="wrong" onClick={()=>{
                onClickWrong()
              }}>👎</ButtonPointStyled>
            </GX1AnwerColumnStyled>
          </GX1AnwersControlsStyled>
        </MediumWrapperStyled>
      </GXFootersContainerStyled>

    </GXContainerStyled>
  )
};

export default GameX1
