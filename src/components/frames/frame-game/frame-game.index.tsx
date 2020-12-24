import React, { ReactElement, useState, useEffect } from 'react'

import CoreService from '~/services/CoreService/CoreService'

import {
  FrameStyled,
} from '~/components/layout/layout.index'
import GameX4 from '~/components/games/game-x4/game-x4.index'

const FrameGame = (): ReactElement => {

  const [loaded, setLoaded] = useState(false);

  const { t } = CoreService

  return (
    <FrameStyled>
      <GameX4 />
    </FrameStyled>
  )
};

export default FrameGame

