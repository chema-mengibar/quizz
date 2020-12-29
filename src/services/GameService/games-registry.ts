import {QuizRegsitry, GameTypes, SourceTypes} from './game-service.types'

export default [
  { 
    type: GameTypes.x4,
    question: 'Cual es el nombre del personaje de la imagen?',
    source: 'https://pagesix.com/wp-content/uploads/sites/3/2020/03/gettyimages-1200624305.jpg?quality=90&strip=all&w=618&h=410&crop=1',
    sourceType: SourceTypes.image,
    options: [
      {key: 'A', value: 'Jim Morrison'},
      {key: 'B', value: 'Espinete'},
      {key: 'C', value: 'Nabucodonosor Jacinto I'},
      {key: 'D', value: 'Brad Pitt'},
    ],
    solutionOptionKey: 'D',

  },
  { 
    type: GameTypes.x4,
    question: 'Cual es el nombre del dibujo de la imagen?',
    source: 'https://www.goldderby.com/wp-content/uploads/2019/08/Richard-Gere.jpg?w=620&h=360&crop=1',
    sourceType: SourceTypes.image,
    options: [
      {key: 'A', value: 'Richar Gere'},
      {key: 'B', value: 'Espinete'},
      {key: 'C', value: 'Nabucodonosor Jacinto I'},
      {key: 'D', value: 'Mr. T'},
    ],
    solutionOptionKey: 'A',
    timeSeconds: 95
  }
] as QuizRegsitry


