import React, { ReactElement, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import CoreService from '~/services/CoreService/CoreService'
import Logo  from '~/components/ci/logo'

import {
  FrameIntroStyled
} from "./frame-intro.styles";


const FrameIntro = (): ReactElement => {
  
  const [loaded, setLoaded] = useState(false);

  const {t} = CoreService

  return (
    <FrameIntroStyled>
      <Logo />
      { loaded && <Redirect to="/menu" />  }

      {t('dummy')}
    </FrameIntroStyled>
  )
 };

export default FrameIntro

