import { SET_USER_NAME, SET_USER_PASSWORD } from "../actions/types.js";

const initialState = {
    userName: 'InitialName'
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_NAME:
            return {
                ...state,
                userName: payload,
            }

        case SET_USER_PASSWORD:
            return {
                ...state,
                password: payload
            }

        default:
            return state
    }
}