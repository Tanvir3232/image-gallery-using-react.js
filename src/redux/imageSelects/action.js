import {  RESET, SELECTIMAGE } from "./actionTypes"
export const  selectImage = id =>{
    return {
        type: SELECTIMAGE,
        payload: id
    }
}
export const resetImages = () =>{
    return {
        type: RESET
    }
}
