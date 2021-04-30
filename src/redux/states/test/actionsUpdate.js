import {
    SET_LOADER, SET_CRACK_NAME
} from "./types.js";

export const setLoader = (isLoading) => (
    {
        type: SET_LOADER,
        payload: isLoading
    }
);

export const setCrackName = (name) => (
    {
        type: SET_CRACK_NAME,
        payload: name
    }
);