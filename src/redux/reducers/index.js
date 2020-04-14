import { combineReducers } from "../../juanjoModules/redux-store.js";
import login from "./login.js";
import greeting from "./secondTest.js";

export default combineReducers({
    login,
    greeting
})