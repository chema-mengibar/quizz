import { GameState } from '~/context/game.types'
import { TeamsContextProps } from '~/context/Teams.context'

import { QuizRegsitry, Quiz, GameTypes, SourceTypes, PlayModeTypes } from './game-service.types'
import QuizRegistry from './games-registry'


class GameService {

  registry: QuizRegsitry = QuizRegistry

  constructor() {

  }

  config = {
    rounds: [
      {
        quizes: 2,
        mode: PlayModeTypes.single,
        turns: 3,
      },
      {
        quizes: 25,
        mode: PlayModeTypes.faster,
        turns: 1,
      }
    ]
  }

  roundCheck(gameCtxtState: GameState, teamsContext: TeamsContextProps) {
    
    const currentRound = gameCtxtState.current.round
    
    gameCtxtState.current.roundQuiz = gameCtxtState.current.roundQuiz + 1

    if (gameCtxtState.current.roundQuiz >= this.config.rounds[currentRound].quizes) {
      
      if (gameCtxtState.current.turn >= this.config.rounds[currentRound].turns - 1) {
        
        gameCtxtState.current.turn = 0
        
        const nextRoundIdx = gameCtxtState.current.round + 1
        
        if (nextRoundIdx === this.config.rounds.length) {
          // Game ends
          teamsContext.dispatch({type:'resetBuzzeredTeam'})
          gameCtxtState.endGame = true
          return
        }
        gameCtxtState.current.round = nextRoundIdx

        const roundConfig = this.config.rounds[nextRoundIdx]

        if( roundConfig.mode === PlayModeTypes.faster ){
          teamsContext.dispatch({type:'resetBuzzeredTeam'})
        }else{
          teamsContext.dispatch({type:'jumpNextTeam'})
        }
      }
      else{
        
        gameCtxtState.current.turn = gameCtxtState.current.turn + 1
        
        if( this.config.rounds[currentRound].mode === PlayModeTypes.single ){
          // Change Team in round
          teamsContext.dispatch({type:'jumpNextTeam'})
        }
      }
      gameCtxtState.current.roundQuiz = 0
      
    }else{

      const roundIdx = gameCtxtState.current.round

      const roundConfig = this.config.rounds[roundIdx]

      if( roundConfig.mode === PlayModeTypes.faster ){
        teamsContext.dispatch({type:'resetBuzzeredTeam'})
      }

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