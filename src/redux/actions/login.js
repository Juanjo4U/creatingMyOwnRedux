import { SET_USER_NAME, SET_USER_PASSWORD } from "./types.js";

export const setPassword = (password) => ({
    type: SET_USER_PASSWORD,
    payload: password
})

export const setName = (name) => (dispatch, getState) => {
    console.log('myActionDispatch: ', dispatch)
    console.log('myActionGetState: ', getState())
    return {
        type: SET_USER_NAME,
        payload: name
    }
}