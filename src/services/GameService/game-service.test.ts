import { TeamsContextProps } from '~/context/Teams.context'
import { GameState } from '~/context/game.types'

import { GameConfig, PlayModeTypes } from './game-service.types'
import GameService from './game-service'


const mockTeamsCtxt = {
  state: {
    current: {
      team: 0,
    },
    teams: [
      {
        name: 'Lila',
        points: 0,
        color: '#df03fc',
        buzzerKey: 'a',
        id: 0
      },
      {
        name: 'Pink',
        points: 0,
        color: '#df03fc',
        buzzerKey: 'b',
        id: 1
      },
    ]
  },
  dispatch: ()=>{}
} as TeamsContextProps


describe('setNextQuiz()', () => {
  it('case 1: change the turn', () => {

    const mockConfig = {
      rounds: [
        {
          quizes: 1,
          mode: PlayModeTypes.single,
          turns: 3,
          registry: []
        },
        {
          quizes: 25,
          mode: PlayModeTypes.faster,
          turns: 1,
          registry: []
        }
      ]
    }

    const gameService =   new GameService( mockConfig )

    const mockGameCtxtState: GameState = {
      noty: null,
      cursorRound: 0,
      cursorTurn: 0,
      cursorQuiz: 0,
      cursorRoundQuiz: 0,
      current: {
        step: 0
      },
      endGame: false
    }

    gameService.setNextQuiz( mockGameCtxtState, mockTeamsCtxt )
    
    expect( mockGameCtxtState.cursorRound ).toBe(0)
    expect( mockGameCtxtState.cursorTurn ).toBe(1)
    expect( mockGameCtxtState.cursorQuiz ).toBe(0)
  })


  it('case 2: change the round', () => {

    const mockConfig = {
      rounds: [
        {
          quizes: 1,
          mode: PlayModeTypes.single,
          turns: 3,
          registry: []
        },
        {
          quizes: 25,
          mode: PlayModeTypes.faster,
          turns: 1,
          registry: []
        }
      ]
    }

    const gameService =   new GameService( mockConfig )

    const mockGameCtxtState: GameState = {
      noty: null,
      cursorRound: 0,
      cursorTurn: 2,
      cursorQuiz: 1,
      cursorRoundQuiz: 0,
      current: {
        step: 0
      },
      endGame: false
    }

    gameService.setNextQuiz( mockGameCtxtState, mockTeamsCtxt )
    
    expect( mockGameCtxtState.cursorRound ).toBe(1)
    expect( mockGameCtxtState.cursorTurn ).toBe(0)
    expect( mockGameCtxtState.cursorQuiz ).toBe(0)
  })

  it('case 3: end game', () => {

    const mockConfig = {
      rounds: [
        {
          quizes: 1,
          mode: PlayModeTypes.single,
          turns: 3,
          registry: []
        },
        {
          quizes: 25,
          mode: PlayModeTypes.faster,
          turns: 1,
          registry: []
        }
      ]
    }

    const gameService =   new GameService( mockConfig )

    const mockGameCtxtState: GameState = {
      noty: null,
      cursorRound: 1,
      cursorTurn: 0,
      cursorQuiz: 24,
      cursorRoundQuiz: 0,
      current: {
        step: 0
      },
      endGame: false
    }

    gameService.setNextQuiz( mockGameCtxtState, mockTeamsCtxt )
    
    expect( mockGameCtxtState.endGame ).toBe(true)
  })


})