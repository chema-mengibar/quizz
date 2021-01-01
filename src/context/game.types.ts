
export enum GameSteps {
  pause,
  prepare,
  asking,
  playing,
  played,
  resolving
}

export enum NotyTypes {
  success,
  error,
  message
}

export interface Noty {
  type: NotyTypes
  message?: string
}

export interface GameState {
  noty: Noty | null
  cursorRound: number
  cursorTurn: number
  cursorQuiz: number
  cursorRoundQuiz: number
  current: {
    step: GameSteps
  }
  endGame: boolean
}