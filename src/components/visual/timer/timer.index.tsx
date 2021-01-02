import React, { ReactElement, useEffect, useState } from 'react'

import { useTimerContext } from '~/context/Timer.context';
import { TimerState } from '~/context/Timer.types';
import CoreService from '~/services/CoreService/CoreService';
import { TimerStatus } from '~/context/timer.types'

import { TimerStyled, } from "./timer.styles";

const Timer = (): ReactElement => {

  const timerContext = useTimerContext()

  const { t } = CoreService

  const [intervalId, setIntervalId] = useState<number | undefined>()


  function startTimer() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const timerInterval = setInterval( ()=>{
      timerContext.dispatch({type:'dec'})
    }, 1000);
    setIntervalId(timerInterval)
  }

  function clearTimer() {
    timerContext.dispatch({ type: 'setStatusEnd' })
    clearInterval(intervalId);
  }

  useEffect(() => {
    return () => {
      clearTimer()
    };
  }, [])

  useEffect(() => {
    const status = timerContext.state.status
    if (status === TimerStatus.start) {
      startTimer()
      timerContext.dispatch({ type: 'setStatusCounting' })
    }
  }, [timerContext.state.status])

  useEffect(() => {
    const sec = timerContext.state.currentTime
    if (sec === 0) {
      clearTimer()
    }
  }, [timerContext.state.currentTime])


  function mapStateToColor( timerState: TimerState ){

    if( timerState.status === TimerStatus.pause ){
      return 'grey'
    }
    if( timerState.currentTime == 0  ){
      return 'red'
    }
    if( timerState.currentTime < 5  ){
      return 'orange'
    }
    return 'white'
  }

  return (
    <TimerStyled
      color= { mapStateToColor(timerContext.state)}
      onDoubleClick={()=>{
        timerContext.dispatch({ type: 'reStart' })
      }}
      onClick={() => {
        const status = timerContext.state.status
        if (status === TimerStatus.counting) {
          timerContext.dispatch({ type: 'setStatusPause' })
        }
        else if (status === TimerStatus.ready) {
          timerContext.dispatch({ type: 'setStatusStart' })
        }
        else if (status === TimerStatus.pause) {
          timerContext.dispatch({ type: 'setStatusCounting' })
        }
      }}
      data-cy="timer"
    >
      {timerContext.state.currentTime} {t('timer_seconds')}
    </TimerStyled>
  )
};

export default Timer
