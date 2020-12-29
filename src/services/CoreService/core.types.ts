import { SuportedLocales } from '~/services/LocaleService/local.types';

export interface InitialCoreOptions {
  local: SuportedLocales,
  gameContext: any
}

export enum CoreStatus{
  initWait,
  initStarted,
  initEnd
}