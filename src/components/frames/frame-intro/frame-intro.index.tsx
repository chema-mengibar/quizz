import React, { ReactElement, useState, useEffect } from 'react'
import { useHistory  } from 'react-router-dom';

import CoreService from '~/services/CoreService/CoreService'
import Logo  from '~/components/ci/logo'

import {
  FrameIntroStyled,
  TitleStyled,
  ControlsStyled
} from "./frame-intro.styles";


const FrameIntro = (): ReactElement => {
  
  const history = useHistory();

  const core = CoreService.getInstance()
  core.configService.initControlKeys( history )

  const {t} = CoreService


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

