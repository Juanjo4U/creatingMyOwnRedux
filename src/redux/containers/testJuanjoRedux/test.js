import { connect } from "../../../juanjoModules/redux-store.js";
import myComponent from "../../../components/testJuanjoRedux.js";
import { myAction } from "../../actions/login.js";

const mapStateToProps = state => ({
    name: state.login?.userName
})

const mapDispatchToProps = dispatch => ({
    myAction: (name) => dispatch(myAction(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(myComponent)