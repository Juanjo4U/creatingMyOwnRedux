import { store } from "./src/redux/index.js";
import reduxComponent from "./src/redux/containers/index.js";
import { setLoader } from "./src/redux/states/test/actionsUpdate.js";

reduxComponent();

store.dispatch(setLoader(true));
store.dispatch(setLoader(true));
store.dispatch(setLoader(false));