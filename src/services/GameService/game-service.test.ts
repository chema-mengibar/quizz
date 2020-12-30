import { TeamsContextProps } from '~/context/Teams.context'
import { GameState } from '~/context/game.types'

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


describe('checkRound()', () => {
  it('case 1: change the turn', () => {

    const gameService =   new GameService()

    const mockGameCtxtState: GameState = {
      noty: null,
      current: {
        round: 0,
        roundQuiz: 1,
        turn: 0,
        quiz: 0,
        step: 0
      },
      endGame: false
    }

    gameService.roundCheck( mockGameCtxtState, mockTeamsCtxt )
    console.log( 'TEST', mockGameCtxtState )
    expect( mockGameCtxtState.current.round ).toBe(0)
    expect( mockGameCtxtState.current.roundQuiz ).toBe(0)
    expect( mockGameCtxtState.current.turn ).toBe(1)
  })


  it('case 2: change the round', () => {

    const gameService =   new GameService()

    const mockGameCtxtState: GameState = {
      noty: null,
      current: {
        round: 0,
        roundQuiz: 1,
        turn: 2,
        quiz: 0,
        step: 0
      },
      endGame: false
    }

    gameService.roundCheck( mockGameCtxtState, mockTeamsCtxt )
    console.log( 'TEST', mockGameCtxtState )
    expect( mockGameCtxtState.current.round ).toBe(1)
    expect( mockGameCtxtState.current.roundQuiz ).toBe(0)
    expect( mockGameCtxtState.current.turn ).toBe(0)
  })

  it('case 3: end game', () => {

    const gameService =   new GameService()

    const mockGameCtxtState: GameState = {
      noty: null,
      current: {
        round: 1,
        roundQuiz: 24,
        turn: 1,
        quiz: 0,
        step: 0
      },
      endGame: false
    }

    gameService.roundCheck( mockGameCtxtState, mockTeamsCtxt )
    console.log( 'TEST', mockGameCtxtState )

    expect( mockGameCtxtState.endGame ).toBe(true)
  })
})