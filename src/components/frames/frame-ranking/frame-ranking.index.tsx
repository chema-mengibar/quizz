import React, { ReactElement, useState, useEffect } from 'react'

import CoreService from '~/services/CoreService/CoreService'
import { useTeamsContext } from '~/context/Teams.context'

import {
  FrameRankingStyled,
  FrameTitleStyled,
  RankContainerStyled,
  ColumnStyled,
  BarContainerStyled,
  BarStyled,
  NameContainerStyled,
  BarPointsStyled
} from "./frame-ranking.styles";


const FrameRanking = (): ReactElement => {

  const core = CoreService.getInstance()

  const {t} = CoreService

  const teamsContext = useTeamsContext()
  const teams = teamsContext.state.teams

  function mapPoints( teamPoints: number ): number{
    let maxPoints = 0;
    for( let i=0; i < teams.length; i++){
      maxPoints = Math.max(teams[i].points, maxPoints)
    }
    return (teamPoints * 100)/maxPoints
  }

  return (
    <FrameRankingStyled>
      <FrameTitleStyled>{t('ranking_title')}</FrameTitleStyled>
      <RankContainerStyled>
        {
          teamsContext.state.teams.map((team, idx) => {
            return <ColumnStyled key={`team-rank_${idx}`}>
              <BarContainerStyled>
                <BarStyled style={{ 
                    height: `${mapPoints(team.points)}%`,
                    backgroundColor: team.color
                  }} />
                  <BarPointsStyled>{team.points}</BarPointsStyled>
              </BarContainerStyled>
              <NameContainerStyled> {team.name} </NameContainerStyled>
            </ColumnStyled>
          })
        }
      </RankContainerStyled>
    </FrameRankingStyled>
  )
};

export default FrameRanking

