import { Team, TeamIds } from "~/context/teams.types";

export enum TimerStatus {
  ready = 'ready',
  start = 'start',
  counting = 'counting',
  pause = 'pause',
  end = 'end'
}

export interface TimerState {
  timeInSeconds: number
  currentTime: number
  status: TimerStatus
}
