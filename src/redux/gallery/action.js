import { ADDITEM } from "./actionTypes"

export const addItem = id =>{
    return {
        type: ADDITEM,
        payload: id
    }
}