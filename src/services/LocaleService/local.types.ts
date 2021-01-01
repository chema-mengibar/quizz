export type LocalDictionary = {
  [key: string]: string
}

export enum SuportedLocales {
  es
}

export interface InitialOptions {
  local: SuportedLocales
}


export enum LocalCodes {
  de = 'de-DE',
  en = 'en-EN',
  es = 'es-ES',
}