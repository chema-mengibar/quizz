import React, { ReactElement, useState, useEffect } from 'react'
import { useHistory  } from 'react-router-dom';

import { useTeamsContext } from '~/context/Teams.context'
import CoreService from '~/services/CoreService/CoreService'

import {
  FrameIntroStyled,
  TitleStyled,
  ControlsStyled
} from "./frame-intro.styles";


const FrameIntro = (): ReactElement => {
  
  const history = useHistory();
  const teamsContext = useTeamsContext()
  const {t} = CoreService
  const core = CoreService.getInstance()

  core.configService.initControlKeys( history )
  core.teamsService.initBuzzers(teamsContext)

  function navigate( targetFrame: string ){
    history.push(targetFrame);
  }
  return (
    <FrameIntroStyled>

      <div
        onClick={()=>{  navigate("/ranking");  }}
      >
        <TitleStyled>{t('title')}</TitleStyled>
      </div>

      <ControlsStyled>
        <div onClick={()=>{ navigate("/"); } }> intro (i) </div>
        <div onClick={()=>{ navigate("/play"); } }> play (p) </div>
        <div onClick={()=>{ navigate("/ranking"); } }> ranking (r) </div>
      </ControlsStyled>
    </FrameIntroStyled>
  )
 };

export default FrameIntro

