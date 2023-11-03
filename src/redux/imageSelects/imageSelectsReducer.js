import { RESET, SELECTIMAGE } from "./actionTypes";
import { initialState } from "./initialState";

const imageSelectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTIMAGE: {
            const existImageId = state.find(item => item === action.payload);
            if (existImageId) {
                const restImages = state.filter(item => item !== existImageId);
                return [...restImages];
            }
            else {
                return [
                    ...state,
                    action.payload

                ]
            }

        }
        case RESET:
            return [];
        default:
            return state;
    }
}
export default imageSelectsReducer;