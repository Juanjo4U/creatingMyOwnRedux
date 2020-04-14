import { connect } from "../../../juanjoModules/redux-store.js";
import myComponent from "../../../components/testJuanjoRedux.js";
import { setName, setPassword } from "../../actions/login.js";

const mapStateToProps = (state, props) => ({
    name: state.login.userName,
    password: state.login.password + '  componentProps:  ' + props
})

const mapDispatchToProps = dispatch => ({
    setName: (name) => dispatch(setName(name)),
    setPassword
})

export default connect(mapStateToProps, mapDispatchToProps)(myComponent)