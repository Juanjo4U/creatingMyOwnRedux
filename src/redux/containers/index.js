import { connect } from "../../../juanjo_modules/redux/connect/index.js";
import component from "../../components/index.js";
import { dispatchSetLoader } from "../states/test/actionsDispatch.js";
import { selectIsLoading } from "../states/test/selecters.js";

const mapStateToProps = (state, props) => (
    {
        isLoading: selectIsLoading(state)
    }
)

const mapDispatchToProps = (dispatch, props) => (
    {
        setLoader: (isLoading) => dispatch(dispatchSetLoader(isLoading))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(component)