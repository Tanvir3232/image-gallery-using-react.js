import { createStore } from "redux";
import galleryReducer from "./gallery/galleryReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(galleryReducer,composeWithDevTools());