import { createStore } from "../juanjoModules/redux-store.js";
import greeting from "./reducers/secondTest.js";
import login from "./reducers/login.js";

export default () => createStore({ login, greeting })