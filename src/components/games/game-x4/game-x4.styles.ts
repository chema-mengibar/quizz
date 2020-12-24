import styled, { css } from "styled-components";

// import media from '~/utils/media/media.index';
import bl from '~/styles/shared/baseline.styles';


export const GX4ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const GX4HeaderContainerStyled = styled.div`
  height: ${bl._m6};
`

export const GX4BodyContainerStyled = styled.div`
  min-height:200px;
  flex:1;
  width:100%;
  position:relative;
`

export const GX4FootersContainerStyled = styled.div`
  width:100%;
  height: ${bl._m8};
`

export const GX4AnwersContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding ${bl._} 0;
`

export const GX4TimerColumnStyled = styled.div`
  display:flex;
  align-items: center;
`

export const GX4TimerStyled = styled.div`
  height: 70px;
  width: 70px;
  border: 2px solid white;
  border-radius: 35px;
  line-height:70px;
  color: white;
  font-size: 24px;
  text-align: center;
  color: orange;
  position:relative;
`

export const GX4TimerCounterStyled = styled.div`
  position: absolute;
  height: 70px;
  width: 70px;
  border: 2px solid orange;
  border-radius: 35px;
  top: 0px;
  left: 0px;
`

export const GX4AnswerStyled = styled.div`
  border-radius: 28px;
  border: 1px solid white;
  line-height: ${bl._m2};
  color: white;
  background: rgb(72,50,150);
  background: linear-gradient(180deg, rgba(72,50,150,1) 0%, rgba(17,8,51,1) 40%, rgba(17,8,51,1) 67%, rgba(70,44,165,1) 93%, rgba(72,50,150,1) 100%);
  display: flex;
  flex-direction: row;
  padding: 0 0 0 20px;
  font-size: 28px;
  width: 400px;
`

export const GX4AnswerKeyStyled = styled.div`
  color: orange;
  margin-right: 10px;
  &:after{
    display: inline: block;
    content: ':';
  }
`

export const GX4AnwerColumnStyled = styled.div`
  ${GX4AnswerStyled}:not(:last-child){
    margin-bottom: ${bl._};
  }
`

export const GX4QuestionStyled = styled.div`
  display:flex;
  height: 100%;
  align-items: center;
`

export const CopyQestionStyled = styled.div`
  color: white;
  font-size: 28px;
  width:100%;
  text-align:center;
  line-height:32px;
`

export const GX4QuestionMonitorStyled = styled.div`
  border: 1px solid white;
  height: 100%;
  width:100%;
  border-radius: 30px;
  background-color: rgba(0,0,0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;

  &::after {
    display: block;
    content: '';
    position: absolute;
    height: 2px;
    width: 500px;
    background-color: white;
    right: left;
    top: 50%;
    right: 0;
    margin: 0 -500px;
  }

  &::before {
    display: block;
    content: '';
    position: absolute;
    height: 2px;
    width: 500px;
    background-color: white;
    right: left;
    top: 50%;
    left: 0;
    margin: 0 -500px;
  }
`

export const GX4QuestionImageStyled = styled.div`
  width: 400px;
  height: 90%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
