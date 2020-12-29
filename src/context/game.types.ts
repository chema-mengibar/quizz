
export enum GameSteps {
  pause,
  prepare,
  asking,
  playing,
  played,
  resolving
}

export interface GameState {
  current:{
    round: number,
    quiz: number
    step: GameSteps
  }
}