import { GameConfig, PlayModeTypes } from './game-service.types'

import RegistryX1 from './registry/registry-x1'
import RegistryX4 from './registry/registry-x4'

export default {
  rounds: [
    {
      quizes: 10,
      mode: PlayModeTypes.single,
      turns: 3,
      registry: RegistryX4
    },
    {
      quizes: 8,
      mode: PlayModeTypes.faster,
      turns: 1,
      registry: RegistryX1
    },

  
  ]
} as GameConfig