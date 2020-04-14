export const {
    connect,
    combineReducers,
    createStore
} = (
    () => {
        let store, state, allReducers, reduxComponents = [], index = 0;

        const getState = () => Object.assign({}, state)

        const refreshComponents = () => reduxComponents.map(component => component())

        const notifyReducers = action => {
            console.log('%cprevState: ', 'font-size: 20px; color: lightgray;', state)
            console.log('%cAction: ', 'font-size: 20px; color: yellow;', action)
            Object.keys(allReducers).map(key => {
                state = {
                    ...state,
                    [key]: allReducers[key](getState()[key], action)
                }
            })
            console.log('%cnextState: ', 'font-size: 20px; color: lightgreen;', state)
            refreshComponents()
        }

        const dispatch = action => {
            if (typeof action === 'function') action = action(dispatch, getState)
            if (typeof action === 'object') notifyReducers(action)
        }

        const connect = (mapStateToProps, mapDispatchToProps) => component => {
            if (typeof mapDispatchToProps === 'function') mapDispatchToProps = mapDispatchToProps(dispatch);

            Object.keys(mapDispatchToProps).forEach(key => {
                const reduxAction = mapDispatchToProps[key]
                mapDispatchToProps[key] = (...arg) => {
                    const notification = reduxAction(...arg);
                    if (typeof notification === 'object') notifyReducers(notification)
                }
            })

            let componentIndex = index;

            const newComponent = (...arg) => {
                reduxComponents[componentIndex] = () => newComponent(...arg)
                return component({ ...mapStateToProps(getState(), ...arg), ...mapDispatchToProps })
            }

            index++;

            return newComponent
        }

        const combineReducers = (reducers = {}) => {
            allReducers = {
                ...allReducers,
                ...reducers
            };
            Object.keys(reducers).map(key => reducers[key] = reducers[key](undefined, {}))
            return reducers
        }

        const createStore = newState => {
            state = newState;
            return {
                dispatch,
                getState
            }
        }

        const createReduxStore = () => ({
            connect,
            combineReducers,
            createStore
        })

        if (!store) {
            store = createReduxStore()
            return store
        }
        else return store
    }
)()