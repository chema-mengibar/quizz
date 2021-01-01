import {Team, TeamIds} from "~/context/teams.types";

export enum TimerStatus {
  ready,
  pause,
  end
}

export interface TimerState {
  timeInSeconds: number
  status:TimerStatus
}
