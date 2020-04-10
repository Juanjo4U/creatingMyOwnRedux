import { SET_GREETING } from "./types.js";

export const setGreeting = (greet) => ({
    type: SET_GREETING,
    payload: greet
})
