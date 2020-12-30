
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
  current: {
    round: number
    roundQuiz: number
    turn: number
    quiz: number
    step: GameSteps
  }
  endGame: boolean
}