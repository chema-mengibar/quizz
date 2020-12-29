import { GameState } from '~/context/game.types.ts'
const hotkeys = require('~/utils/hotkeys/hotkeys.common.js');

import { TeamsContextProps } from '~/context/Teams.context'
import { GameContextProps } from '~/context/Game.context'

import { QuizRegsitry, Quiz, GameTypes, SourceTypes } from './game-service.types'
import QuizRegistry from './games-registry'


class GameService {

  local = 'en'

  registry: QuizRegsitry = QuizRegistry

  flagKeys = false

  constructor() {

  }

  initBuzzers(teamsCtxt: TeamsContextProps, gameCtxt: GameContextProps): void {
    if (!this.flagKeys) {
      this.flagKeys = true
      teamsCtxt.state.teams.forEach(function (teamItem) {
        let elementKey = teamItem.buzzerKey
        hotkeys(elementKey, (event: any, handler: any) => {
          gameCtxt.dispatch({ type: 'response', payload: teamItem.id })
        });
      })
    }
  }

  setNextQuiz(gameCtxtState: GameState): number {
    const idx = gameCtxtState.current.quiz + 1
    const isLastQuizz = idx >= this.registry.length;
    if (isLastQuizz) {
      return 0;
    } else {
      return idx;
    }
  }

  getQuiz(gameCtxtState: GameState): Quiz {
    return this.registry[gameCtxtState.current.quiz];
  }
}

export default GameService