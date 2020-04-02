import { SET_USER_NAME } from "../actions/types.js";

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

        default:
            return state
    }
}