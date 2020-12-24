import React, { ReactElement } from 'react'

import { useThemeContext } from '~/context/Theme.context';
import CoreService from '~/services/CoreService/CoreService';

import {
  MediumWrapperStyled,
} from '~/components/layout/layout.index'

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


const GameX4 = ({ dataCY }: GameX4Props): ReactElement => {

  const { t } = CoreService

  return (
    <GX4ContainerStyled data-cy={dataCY}>

      <GX4HeaderContainerStyled>
        <MediumWrapperStyled>
          <GX4QuestionStyled>
            <CopyQestionStyled>Cual es el nombre del <br />personaje <br />de la imagen?</CopyQestionStyled>
          </GX4QuestionStyled>
        </MediumWrapperStyled>
      </GX4HeaderContainerStyled>

      <GX4BodyContainerStyled>
        <MediumWrapperStyled>
          <GX4QuestionMonitorStyled>
            <GX4QuestionImageStyled style={{ backgroundImage: 'url(https://pagesix.com/wp-content/uploads/sites/3/2020/03/gettyimages-1200624305.jpg?quality=90&strip=all&w=618&h=410&crop=1)' }} />
          </GX4QuestionMonitorStyled>
        </MediumWrapperStyled>
      </GX4BodyContainerStyled>

      <GX4FootersContainerStyled>
        <MediumWrapperStyled>
          <GX4AnwersContainerStyled>
            <GX4AnwerColumnStyled>
              {
                [
                  { key: 'A', value: 'Jim Morrison' },
                  { key: 'C', value: 'Nabucodonosor Jacinto I' },

                ].map(item => {
                  return <GX4AnswerStyled>
                    <GX4AnswerKeyStyled>{item.key}</GX4AnswerKeyStyled>
                    <p>{item.value}</p>
                  </GX4AnswerStyled>
                })
              }
            </GX4AnwerColumnStyled>
            <GX4TimerColumnStyled>
              <GX4TimerStyled >
                50
          <GX4TimerCounterStyled />
              </GX4TimerStyled>
            </GX4TimerColumnStyled>
            <GX4AnwerColumnStyled>
              {
                [
                  { key: 'B', value: 'Espinete' },
                  { key: 'D', value: 'Mr. T' },
                ].map(item => {
                  return <GX4AnswerStyled>
                    <GX4AnswerKeyStyled>{item.key}</GX4AnswerKeyStyled>
                    <p>{item.value}</p>
                  </GX4AnswerStyled>
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
