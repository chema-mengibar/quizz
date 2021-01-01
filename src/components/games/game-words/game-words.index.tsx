import React, { ReactElement, useEffect, useState } from 'react'

import {
  MediumWrapperStyled,
} from '~/components/layout/layout.index'
import Timer from "~/components/visual/timer/timer.index";
import { useTeamsContext } from '~/context/Teams.context'
import { useGameContext } from '~/context/Game.context'
import CoreService from '~/services/CoreService/CoreService';

import {GXHeaderContainerStyled,
  GXBodyContainerStyled,
  GXContainerStyled,
  GXFootersContainerStyled,
  GXQuestionMonitorStyled,
} from '../shared/games.styles'
import {GX4AnswerStyled,
} from '../game-x4/game-x4.styles'

import {
  GWQuestionStyled,
  CopyQestionStyled,
  ButtonResolveStyled,
  GWWordsContainerStyled,
} from "./game-words.styles";
import { GameWordsProps, } from "./game-words.types";
import {useTimerContext} from "~/context/Timer.context";



const GameWords = ({ dataCY, quiz }: GameWordsProps): ReactElement => {

  const gameContext = useGameContext()
  const teamsContext = useTeamsContext()
  const timerContext = useTimerContext()

  const {t} = CoreService

  const [okWords, setOkWords ] = useState<string[]>([])

  const [showQuestion, setShowQuestion] = useState<boolean>(true)

  useEffect(() => {

    timerContext.dispatch({type:'setTime', payload: 20})

    return ()=>{
      setShowQuestion(false)
      setOkWords([])
    }
  }, [quiz])

  const points = 25;

  function onWordClick( word ){
    const listWords = [...okWords]
    if( !listWords.includes(word)){
      listWords.push(word)
    }else {
      const wordIdx = listWords.indexOf(word)
      listWords.splice(wordIdx, 1);
    }
    setOkWords( listWords )
  }

  function onClickStart(){
    setShowQuestion(true)
    setTimeout(() => {
      setTimeout(() => {
        gameContext.dispatch({ type: 'stepSetPlaying' })
      }, 4000)
    }, 2000)
  }

  function onClickResolve(){
    const numWords = okWords.length
    const totalPoints = points * numWords
    teamsContext.dispatch({
      type: 'setBuzzeredTeamPoints',
      payload: totalPoints
    })
    gameContext.dispatch({ type: 'notyMessage', payload: `${totalPoints} ${t('points')}`})
    setTimeout(() => {
      gameContext.dispatch({ type: 'notyReset' })
      gameContext.dispatch({ type: 'next' })
    }, 2000)
  }

  return (
    <GXContainerStyled data-cy={dataCY}>

      <GXHeaderContainerStyled>
        <MediumWrapperStyled>
           <GWQuestionStyled>
            <CopyQestionStyled>
              {t('prepare_team')}
            </CopyQestionStyled>

          </GWQuestionStyled>

        </MediumWrapperStyled>
      </GXHeaderContainerStyled>

      { showQuestion &&
        <GXBodyContainerStyled>
          <MediumWrapperStyled>
            <GXQuestionMonitorStyled>
                <GWWordsContainerStyled>
                {
                  quiz.words.map( (word, idx)=>{
                    return (
                      <GX4AnswerStyled
                        key={`word-${word}`}
                        onClick={()=>{
                          onWordClick(word)
                        }}
                        className="centered"
                        isSelected={false}
                        isOk={okWords.includes(word)}
                      >{word}</GX4AnswerStyled>
                    )
                  })
                }
                </GWWordsContainerStyled>
            </GXQuestionMonitorStyled>
          </MediumWrapperStyled>
        </GXBodyContainerStyled>
      }

      <GXFootersContainerStyled>
        <MediumWrapperStyled>
          <Timer />
         { !showQuestion && <ButtonResolveStyled onClick={()=>{
            onClickStart()
          }}>{t('action_start')}</ButtonResolveStyled>}

         { showQuestion && <ButtonResolveStyled onClick={()=>{
            onClickResolve()
          }}>{t('action_resolve')}</ButtonResolveStyled>}
        </MediumWrapperStyled>
      </GXFootersContainerStyled>

    </GXContainerStyled>
  )
};

export default GameWords
