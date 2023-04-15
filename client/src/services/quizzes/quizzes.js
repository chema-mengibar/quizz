import image1 from './1_image.js'
import image4 from './4_image.js'

/**
 * Types:
 * - map
 * - 1_image
 * - 4_image
 * - 4_text
 * - 4_audio
 */

const _image1 = image1.map(quizzItem => {
    return {
        ...quizzItem,
        type: '1-image',
        id: '1-image_' + quizzItem.id,
    }
})

const _image4 = image4.map(quizzItem => {
    return {
        ...quizzItem,
        type: '4-image',
        id: '4-image_' + quizzItem.id,
    }
})

export default [
    ..._image4,
    ..._image1
]