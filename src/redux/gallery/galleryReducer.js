import { ADDITEM} from "./actionTypes";
import { initialState } from "./initialState";

const galleryReducer = (state=initialState, action)=>{
   switch (action.type) {
    case ADDITEM:
        return{
           ...state
           
        }
   
    default:
        return state;
   }
}
export default galleryReducer;