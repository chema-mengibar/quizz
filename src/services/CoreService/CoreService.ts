
import Config from '~/services/ConfigService/ConfigService'
import Local from '~/services/LocaleService/LocalService'
import GameService from '~/services/GameService/game-service'
import TeamsService from '~/services/teams-service/teams-service'

import { InitialCoreOptions, CoreStatus } from './core.types'
import { SuportedLocales, LocalDictionary } from '../LocaleService/local.types'

class CoreService {

  configService: Config
  local: Local
  gameService: GameService
  teamsService: TeamsService

  static status: CoreStatus = CoreStatus.initWait;
  static instance?: CoreService;

  constructor(intialCoreOptions?: InitialCoreOptions) {

    CoreService.status = CoreStatus.initStarted;

    // Config Service
    const configInitialOptions = {
      local: intialCoreOptions ? intialCoreOptions.local : SuportedLocales.es
    }
    this.configService = new Config(configInitialOptions)

    // Locale Service
    const localeInitialOptions = {
      local: this.configService.currentLocal
    }
    this.local = new Local(localeInitialOptions);

    // Game Service
    this.gameService = new GameService();

    // Teams Service
    this.teamsService = new TeamsService();


    CoreService.instance = this;
    CoreService.status = CoreStatus.initEnd;

  }

  static getInstance() {
    //? lazy check
    if (CoreService.instance === undefined) {
      return null
    }
    return CoreService.instance;
  }

  static async isLoaded() {
    return CoreService.status === CoreStatus.initEnd
  }

  static t(key: string) {
    return CoreService.getInstance().local.t(key)
  }

  static T(keys: string[]) {
    return CoreService.getInstance().local.T(keys)
  }


}

export default CoreService


/*
Usage: Singleton

import CoreService from '~/services/CoreService/CoreService'

const core = CoreService.getInstance()

*/