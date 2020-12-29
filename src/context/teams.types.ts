
export enum  TeamIds{
  a,
  b,
  c,
}

export enum  Buzzerkeys{
  a = 'a',
  b = 'b',
  c = 'c',
}

export interface Team  {
  name: string
  points: number
  color: string,
  buzzerKey: Buzzerkeys
  id: TeamIds
}


export interface TeamsState {
  teams: Team[]
  current:{
    team: TeamIds | null
  }
}