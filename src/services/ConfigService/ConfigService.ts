const hotkeys = require('~/utils/hotkeys/hotkeys.common.js');

import { SuportedLocales } from '~/services/LocaleService/local.types';
import { ConfigOptions, InitialConfigOptions } from './config.types';


class Config {
  
  flagKeys = false

  config : ConfigOptions = {
    local : SuportedLocales.es
  }

  constructor( initialOptions?: InitialConfigOptions ) {
    if( initialOptions && initialOptions.local ){
      this.config.local =  initialOptions.local;
    }
  }

  initControlKeys( history ) {
    if (!this.flagKeys) {
      this.flagKeys = true

      hotkeys('r', (event: any, handler: any) => {
        history.push("/ranking");
      });

      hotkeys('p', (event: any, handler: any) => {
        history.push("/play");
      });

      hotkeys('i', (event: any, handler: any) => {
        history.push("/");
      });

    }
  }

  get currentLocal(){
    return this.config.local;
  }

  get currentConfig(){
    return this.config;
  }
}

export default Config