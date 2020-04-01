export const {
    dispatch,
    getState,
    connect,
    createStore
} = (
    () => {
        let store, state = {}, allReducers = {}, subscribers = [];

        const getState = () => Object.assign({}, state)

        const dispatch = action => {
            let actionReducer = action(dispatch, getState)
            Object.keys(allReducers).map(key => {
                state = {
                    ...state,
                    [key]: allReducers[key](getState()[key], actionReducer)
                }
                console.log('%cdispatchNewState: ', 'font-size: 20px; color: lightgreen;', state)
            })
            subscribers.forEach(sub => sub())
        }

        const connect = (mapStateToProps, mapDispatchToProps) => component => {
            {
                const newComponent = () => component({ ...mapStateToProps(getState()), ...mapDispatchToProps(dispatch) })
                subscribers.push(newComponent)
                return newComponent
            }
        }

        const createStore = (reducers = {}) => {
            Object.keys(reducers).map(key => {
                allReducers[key] = reducers[key]
                state[key] = reducers[key]()
            })
        }

        const createReduxStore = () => ({
            dispatch,
            getState,
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