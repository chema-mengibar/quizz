import React, { ReactElement, useState, useEffect } from 'react'

import CoreService from '~/services/CoreService/CoreService'

import {
  FrameGameStyled
} from "./frame-game.styles";


const FrameGame = (): ReactElement => {
  
  const [loaded, setLoaded] = useState(false);

  const {t} = CoreService

  return (
    <FrameGameStyled>


    </FrameGameStyled>
  )
 };

export default FrameGame

