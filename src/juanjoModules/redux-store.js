export const {
    connect,
    createStore
} = (
    () => {
        let store, state = {}, allReducers = {}, subscribers = [];

        const getState = () => Object.assign({}, state)

        const notifySubscribers = () => subscribers.forEach(subscriber => subscriber())

        const notifyReducers = action => {
            Object.keys(allReducers).map(key => {
                state = {
                    ...state,
                    [key]: allReducers[key](getState()[key], action)
                }
                console.log('%cupdateState: ', 'font-size: 20px; color: lightgreen;', state)
            })
            notifySubscribers()
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

            const newComponent = () => component({ ...mapStateToProps(getState()), ...mapDispatchToProps })
            subscribers.push(newComponent)
            return newComponent
        }

        const createStore = (reducers = {}) => {
            Object.keys(reducers).map(key => {
                allReducers[key] = reducers[key]
                state[key] = reducers[key](undefined, {})
            })
            return {
                dispatch,
                getState
            }
        }

        const createReduxStore = () => ({
            connect,
            createStore
        })

        if (!store) {
            store = createReduxStore()
            return store
        }
        else return store
    }
)()