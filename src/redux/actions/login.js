import { SET_USER_NAME } from "./types.js";

export const myAction = (name) => (dispatch, getState) => {
    console.log('myActionDispatch: ', dispatch)
    console.log('myActionGetState: ', getState())
    return {
        type: SET_USER_NAME,
        payload: name
    }
}