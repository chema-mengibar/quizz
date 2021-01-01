import {
  Quiz
} from '~/services/GameService/game-service.types'

export interface GameWordsProps {
  dataCY?: string;
  id?: string;
  quiz: Quiz
}
