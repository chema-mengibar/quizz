export enum GameTypes {
  x4,
  x1,
}

export enum SourceTypes {
  image,
  video,
  audio
}

export interface Options {
  key:string
  value: string
}

export interface Quiz {
  type: GameTypes
  question: string
  solution?: string
  source?: string
  sourceType?: SourceTypes
  options?: Options[]
  solutionOptionKey: string,
  timeSeconds?: number
}


export enum PlayModeTypes {
  single,
  faster,
  rebound
}


export type QuizRegsitry = Quiz[]



export interface RoundConfig{
  quizes: number
  mode: PlayModeTypes
  turns: number
  registry: QuizRegsitry
}

export interface GameConfig {

  rounds: RoundConfig[]

}