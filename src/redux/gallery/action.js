import { DELETEIMAGES } from "./actionTypes"


export const deleteImages = selectedImages =>{
    return {
        type: DELETEIMAGES,
        payload: selectedImages
    }
}