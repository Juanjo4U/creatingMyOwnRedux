import { styles } from "../utils/index.js";

export const redux = (() => {
    const state = {}, reducers = {};
    let nextSubscriberIndex = 0;
    const subscribers = {};

    const subscribe = (listener) => {
        if (typeof listener !== 'function') return console.error("SUBSCRIBER MUST BE A FUNCTION");
        const subscriptionIndex = nextSubscriberIndex;
        subscribers[subscriptionIndex] = listener;
        nextSubscriberIndex++;
        return () => delete subscribers[subscriptionIndex];
    }

    const refreshSubscribers = () => {
        for (const key in subscribers)
            subscribers[key]();
    }

    const getState = () => state;

    const dispatch = (action) => {
        if (typeof action === 'function') return action(dispatch, getState);
        if (typeof action !== 'object' || !action.type) return console.error("ACTION MUST BE AN OBJECT WITH AT LEAST TYPE PROPERTY");
        const currentState = getState();
        console.log('%cprevState: ', styles.getStyle('prevState'), currentState);
        console.log('%cAction: ', styles.getStyle('action'), action);

        for (const key in reducers)
            state[key] = reducers[key](currentState[key], action);

        console.log('%cnextState: ', styles.getStyle('nextState'), state);
        refreshSubscribers();
    }

    const getStore = () => ({
        getState,
        dispatch,
        subscribe
    })

    const createStore = (rootReducer = {}) => {
        for (const key in rootReducer) {
            const currentReducer = rootReducer[key];
            if (typeof currentReducer === 'function') {
                state[key] = currentReducer(state[key], {});
                reducers[key] = currentReducer;
            }
        }
        console.log('%cInitial State', styles.getStyle('nextState'), state);
        return getStore();
    }

    return {
        createStore,
        ...getStore()
    }
})()