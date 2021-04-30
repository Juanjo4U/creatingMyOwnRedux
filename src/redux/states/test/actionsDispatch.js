import { constants } from "../../../utils/index.js";
import { setCrackName, setLoader } from "./actionsUpdate.js";
import { selectName } from "./selecters.js";

export const dispatchSetLoader = (isLoading) => (dispatch, getState) => {
    if (selectName(getState()) !== constants.crackName) dispatch(setCrackName(constants.crackName));
    else console.log("from: Action dispatch: Hi Crack");
    dispatch(setLoader(isLoading));
}