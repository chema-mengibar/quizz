import { GameState } from '~/context/game.types'
import { TeamsContextProps } from '~/context/Teams.context'
import API from '~/utils/api/api'

import { GameConfig, Quiz, GameTypes, SourceTypes, PlayModeTypes } from './game-service.types'
import DefaultGameConfig from './game.config'

class GameService {

  config: GameConfig = DefaultGameConfig


  constructor(_config?: GameConfig) {
    if (_config) {
      this.config = _config
    }
  }

  async prepareRounds(): Promise<any>{
    return this.fetchRegistry().then(
      (res) =>{
        this.config.rounds[0].registry = res.x4
        this.config.rounds[1].registry = res.words
        this.config.rounds[2].registry = res.x1
      }
    )
  }

  async fetchRegistry(): Promise<any>{
    const responseX1 = await API.fetchAsync('http://quizz.motuo.info/registry.php/?cmd=data&type=x1');
    const responseX4 = await API.fetchAsync('http://quizz.motuo.info/registry.php/?cmd=data&type=x4');
    const responseWords = await API.fetchAsync('http://quizz.motuo.info/registry.php/?cmd=data&type=words');

    const responseX1WithType = responseX1.map( item => {
      return {
        ...item,
        type:GameTypes.x1,
      }
    })
    const responseX4WithType = responseX4.map( item => {
      return {
        ...item,
        type:GameTypes.x4,
      }
    })
    const responseWordsWithType = responseWords.map( item => {
      return {
        ...item,
        type:GameTypes.words,
      }
    })

    return {
      x1: responseX1WithType,
      x4: responseX4WithType,
      words: responseWordsWithType
    }
  }

  getCurrentRoundConfig(gameCtxtState: GameState): any {
    const currentRound = gameCtxtState.cursorRound
    return this.config.rounds[currentRound]
  }

  initPlayTeam(gameCtxtState: GameState, teamsContext: TeamsContextProps) {
    const roundConfig = this.getCurrentRoundConfig(gameCtxtState)
    const { cursorRound, cursorTurn, cursorQuiz } = gameCtxtState
    if (cursorRound === 0 && cursorTurn == 0 && cursorQuiz == 0) {
      if (roundConfig.mode === PlayModeTypes.single) {
        teamsContext.dispatch({ type: 'setStartTeam' })
      }
    }
  }

  setNextQuiz(gameCtxtState: GameState, teamsContext: TeamsContextProps) {
    /*
      state:
        - cursorRound: 0,
        - cursorTurn: 0,
        - cursorQuiz: 0,
        - cursorRoundQuiz: 0, <- X

      config:
        - rounds[]
          - quizes
          - turns
    */

    const roundIdx = gameCtxtState.cursorRound

    // next turn-quiz
    gameCtxtState.cursorQuiz = gameCtxtState.cursorQuiz + 1

    if (gameCtxtState.cursorQuiz >= this.config.rounds[roundIdx].quizes) {
      gameCtxtState.cursorQuiz = 0

      // next turn-team
      gameCtxtState.cursorTurn = gameCtxtState.cursorTurn + 1
      if (gameCtxtState.cursorTurn >= this.config.rounds[roundIdx].turns) {
        gameCtxtState.cursorTurn = 0

        // next game-round
        gameCtxtState.cursorRound = gameCtxtState.cursorRound + 1

        if (gameCtxtState.cursorRound >= this.config.rounds.length) {
          gameCtxtState.endGame = true
          return
        }
      }

      // Change team each change-turn
      const currentRound0 = gameCtxtState.cursorRound
      if (this.config.rounds[currentRound0].mode === PlayModeTypes.single) {
        // Change Team in round
        teamsContext.dispatch({ type: 'jumpNextTeam' })
      }
    }

    // Reset team quiz for faster-mode
    const currentRound1 = gameCtxtState.cursorRound
    if (this.config.rounds[currentRound1].mode === PlayModeTypes.faster) {
      teamsContext.dispatch({ type: 'resetBuzzeredTeam' })
    }

    this.incRoundQuizCursor(gameCtxtState)
  }

  buzzered(gameCtxtState: GameState, teamsContext: TeamsContextProps) {
    setTimeout(() => {
      teamsContext.dispatch({ type: 'buzzerAllowed' })
    }, 100)
  }

  incRoundQuizCursor(gameCtxtState: GameState) {
    const roundIdx = gameCtxtState.cursorRound;

    const quizId = gameCtxtState.cursorRoundQuiz + 1;

    const isLastQuizz = quizId >= this.config.rounds[roundIdx].registry.length;

    if (isLastQuizz) {
      gameCtxtState.cursorRoundQuiz = 0
    } else {
      gameCtxtState.cursorRoundQuiz = quizId
    }
  }

  getQuiz(gameCtxtState: GameState): Quiz {
    const roundIdx = gameCtxtState.cursorRound
    const quizId = gameCtxtState.cursorRoundQuiz
    return this.config.rounds[roundIdx].registry[quizId]
  }

}

export default GameService
