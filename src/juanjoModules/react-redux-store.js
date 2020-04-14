import React from "react";
export const {
    connect,
    combineReducers,
    createStore
} = (
    () => {
        let redux, state, allReducers, subscribers = [], index = 0;

        const getState = () => Object.assign({}, state)

        const notifySubscribers = () => subscribers.map(subscriber => subscriber(getState()))

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
            notifySubscribers()
        }

        const dispatch = action => {
            if (typeof action === 'function') action = action(dispatch, getState)
            if (typeof action === 'object') notifyReducers(action)
        }

        const connect = (mapStateToProps, mapDispatchToProps) => Component => {
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
                const [state, setStateChanges] = React.useState(getState())
                subscribers[componentIndex] = setStateChanges
                return (
                    <Component
                        {...mapStateToProps(state, ...arg)}
                        {...mapDispatchToProps}
                    />
                )
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

        const createRedux = () => ({
            connect,
            combineReducers,
            createStore
        })

        if (!redux) {
            redux = createRedux()
            return redux
        }
        else return redux
    }
)()