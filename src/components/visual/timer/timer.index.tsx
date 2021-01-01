import React, {ReactElement, useEffect, useState} from 'react'

import { useTimerContext } from '~/context/Timer.context';
import CoreService from '~/services/CoreService/CoreService';

import {
 	TimerStyled,
} from "./timer.styles";
import {  TimerProps, } from "./timer.types";

const Timer = ({dataCY}:TimerProps): ReactElement => {

  const core = CoreService.getInstance()
  const timerContext = useTimerContext()

  const [time, setTime] = useState<number>(0)

  useEffect(()=>{

    setTime(timerContext.state.timeInSeconds)
    console.log('>>>>>>>>>>', timerContext.state.timeInSeconds)
    setInterval(()=>{
      console.log('######', time)

    }, 1000);
    
  },[])

  return (
    <TimerStyled data-cy="timer">
      {time}
    </TimerStyled>
  )
 };

export default Timer
