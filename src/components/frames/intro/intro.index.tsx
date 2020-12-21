import React, { ReactElement, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import CoreService from '~/services/CoreService/CoreService'
import Logo  from '~/components/ci/logo'

import {
  IntroStyled
} from "./intro.styles";


const Intro = (): ReactElement => {
  
  const [loaded, setLoaded] = useState(false);

  const {t} = CoreService

  return (
    <IntroStyled>
      <Logo />
      { loaded && <Redirect to="/menu" />  }

      {t('dummy')}
    </IntroStyled>
  )
 };

export default Intro

