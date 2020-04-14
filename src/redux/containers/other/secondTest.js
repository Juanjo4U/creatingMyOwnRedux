import { connect } from "../../../juanjoModules/redux-store.js";
import Second from "../../../components/seconTestComponent.js";
import { setGreeting } from "../../actions/secondTest.js";

const mapStateToProps = (state, ownProps) => (
    {
        name: state.login.userName,
        greet: state.greeting.greet + '  componentProps:  ' + ownProps
    }
)

const mapDispatchToProps = dispatch => (
    {
        setGreeting
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Second)