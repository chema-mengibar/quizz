import { GameTypes, SourceTypes } from '~/services/GameService/game-service.types'


export default {
  withImage: {
    quiz:{
      type: GameTypes.x4,
      question: 'What a question?',
      source: '',
      sourceType: SourceTypes.image,
      options: [
        {key:'a', value:'label a'},
        {key:'b', value:'label b'},
        {key:'c', value:'label c'},
        {key:'d', value:'label d'},
      ],
      solutionOptionKey: 'a',
      timeSeconds: 0
    }
  }
};
