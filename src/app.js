import Store from "./redux/store.js";
import JuanjoTest from "./screens/test.js";
import SecondTest from "./screens/secondTest.js";

const store = Store()


let observer = (() => {
    let singleton, subscribers = [], redux = JuanjoTest();

    const createSingleton = () => {
        const subscribe = sub => subscribers.push(sub)
        const notifySubs = (n) => {
            redux = subscribers[0](n)
        }
        return {
            redux,
            subscribe,
            notifySubs
        }
    }
    if (singleton) return singleton
    else {
        singleton = createSingleton();
        return singleton
    }
})()

let observer2 = (() => {
    let singleton, subscribers = [], redux = SecondTest('SecondTest');

    const createSingleton = () => {
        const subscribe = sub => subscribers.push(sub)
        const notifySubs = (n) => {
            redux = subscribers[0](n)
        }
        return {
            redux,
            subscribe,
            notifySubs
        }
    }
    if (singleton) return singleton
    else {
        singleton = createSingleton();
        return singleton
    }
})()

const component = (...arg) => JuanjoTest(...arg)
const component2 = (...arg) => SecondTest(...arg)

observer.subscribe(component)
observer.redux.changeName('Omar')
observer.redux.changeName('Oscar')
observer.notifySubs('newState')
observer.redux.changePassword('u gotta be kidding me')
observer.redux.changeName('Juanjo')

/***************************************************************************/
observer2.subscribe(component2)
observer2.notifySubs('change')
observer2.redux.changeGreet('saludosSecond')

observer.redux.changeName('The fucking Boss')
observer.redux.changePassword('asdfg')

observer2.redux.changeGreet('thirdSecond')
observer2.redux.changeGreet('fourthSecond')
observer2.redux.changeGreet('i keep doing it')
observer.redux.changeName('XiaoFeng') 