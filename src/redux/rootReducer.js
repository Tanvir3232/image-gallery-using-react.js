import {combineReducers} from 'redux'
import galleryReducer from './gallery/galleryReducer'
import imageSelectsReducer from './imageSelects/imageSelectsReducer'
export const rootReducer = combineReducers({
    galleryImages: galleryReducer,
    selectedImages: imageSelectsReducer
})