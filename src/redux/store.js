import { createStore } from "../juanjoModules/redux-store.js";
import login from "./reducers/login.js";

export default () => createStore({ login })