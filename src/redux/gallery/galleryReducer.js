
import { DELETEIMAGES } from "./actionTypes";
import { initialState } from "./initialState";

const galleryReducer = (state = initialState, action) => {
   switch (action.type) {
      case DELETEIMAGES: {
         const selectedImages = action.payload;
         console.log(selectedImages);
         const restImages = state.filter(item => !selectedImages.includes(item.id));
         console.log(restImages);
         return [
            ...restImages
         ]
      }

      default:
         return state;
   }
}
export default galleryReducer;