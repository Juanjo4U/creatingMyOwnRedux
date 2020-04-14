import { createStore } from "../juanjoModules/redux-store.js";
import rootReducers from "./reducers/index.js";

export default () => createStore(rootReducers)