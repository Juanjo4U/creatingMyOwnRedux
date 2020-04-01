import Store from "./redux/store.js";
import JuanjoTest from "./screens/test.js";
Store()

const component = JuanjoTest()

export default component

component.changeName('Jose')
component.changeName('Pepe')
component.changeName('Juanjo')