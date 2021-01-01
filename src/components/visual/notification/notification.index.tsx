import React, { ReactElement } from 'react'

import {
  NotyTypes
} from '~/context/game.types'
import { useGameContext } from '~/context/Game.context';
import CoreService from '~/services/CoreService/CoreService';

import {
  NotificationStyled,
  NotySuccessStyled,
  NotyErrorStyled,
  NotyMsgStyled
} from "./notification.styles";

const Notification = (): ReactElement | null => {

  const core = CoreService.getInstance()

  const gameContext = useGameContext()

  const noty = gameContext.state.noty

  if (noty) {
    return (
      <NotificationStyled data-cy="notification">
        {gameContext.state.noty.type === NotyTypes.success &&
          <NotySuccessStyled>✔</NotySuccessStyled>
        }
        {gameContext.state.noty.type === NotyTypes.error &&
          <NotyErrorStyled>✘</NotyErrorStyled>
        }
        {gameContext.state.noty.type === NotyTypes.message &&
          <NotyMsgStyled>{gameContext.state.noty.message}</NotyMsgStyled>
        }
      </NotificationStyled>
    )
  }
  return null
};

export default Notification


/*
USAGE:

    gameContext.dispatch({ type: 'notySuccess' } )
    gameContext.dispatch({ type: 'notyError' } )
    gameContext.dispatch({ type: 'notyMessage', payload:' You win!' })

*/
