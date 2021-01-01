import React, { ReactElement, useState, useEffect } from 'react'
import { useHistory  } from 'react-router-dom';

import CoreService from '~/services/CoreService/CoreService'
import Logo  from '~/components/ci/logo'

import {
  FrameIntroStyled,
  TitleStyled
} from "./frame-intro.styles";


const FrameIntro = (): ReactElement => {
  
  const history = useHistory();

  const core = CoreService.getInstance()
  core.configService.initControlKeys( history )

  const {t} = CoreService

  return (
    <FrameIntroStyled>

      <div onClick={()=>{
        history.push("/ranking");
      }}>
        <TitleStyled>{t('title')}</TitleStyled>
      </div>
    </FrameIntroStyled>
  )
 };

export default FrameIntro

