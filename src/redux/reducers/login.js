import { SET_USER_NAME } from "../actions/types.js";

const initialState = {
    userName: 'InitialName'
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload,
            }

        default:
            return state
    }
}