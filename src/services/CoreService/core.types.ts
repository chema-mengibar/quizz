import { SuportedLocales } from '~/services/LocaleService/local.types';

export interface InitialCoreOptions {
  local: SuportedLocales
}

export enum CoreStatus{
  initWait,
  initStarted,
  initEnd
}