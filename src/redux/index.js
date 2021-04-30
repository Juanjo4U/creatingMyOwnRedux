import { redux } from "../../juanjo_modules/redux/store/index.js";
import { rootReducer } from "./states/index.js";

export const store = redux.createStore(rootReducer);