import { SET_GREETING } from "../actions/types.js";

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_GREETING:
            return {
                ...state,
                greet: payload,
            }

        default:
            return state
    }
}