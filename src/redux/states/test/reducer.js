import {
    SET_LOADER, SET_CRACK_NAME
} from "./types.js";

const initialState = {
    isLoading: false,
    name: ''
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADER:
            return {
                ...state,
                isLoading: payload,
            }

        case SET_CRACK_NAME:
            return {
                ...state,
                name: payload
            }

        default:
            return state
    }
}