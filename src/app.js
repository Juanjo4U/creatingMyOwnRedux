import Store from "./redux/store.js";
import JuanjoTest from "./screens/test.js";

const store = Store()

const component = JuanjoTest()

export default component

component.changeName('Jose')
component.changeName('Pepe')
component.changeName('Juanjo')
component.changePassword('I am the fucking boss')