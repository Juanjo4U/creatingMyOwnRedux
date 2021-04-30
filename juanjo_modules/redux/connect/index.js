import { redux } from "../store/index.js";

const defaultStateToProps = () => ({});
export const connect = (mapStateToProps = () => ({}), mapDispatchToProps = defaultStateToProps) => {

    if (mapStateToProps) {
        if (typeof mapStateToProps !== 'function')
            return console.error("MAP_STATE_TO_PROPS MUST BE A FUNCTION THAT RECIEVES THE STATE");
    } else mapStateToProps = defaultStateToProps;

    if (typeof mapDispatchToProps === 'object') {
        for (const key in mapDispatchToProps) {
            const currentDispatch = mapDispatchToProps[key];
            if (typeof currentDispatch === 'function')
                mapDispatchToProps[key] = (...args) => redux.dispatch(currentDispatch(...args));
        }
    }

    return (component) => {
        if (typeof component !== 'function') return console.error("COMPONENT HAS TO BE A FUNCTION");

        let unsubscribe, prevState = {};

        const newComponent = (...args) => {
            if (typeof unsubscribe === 'function') unsubscribe();
            if (typeof mapDispatchToProps === 'function') mapDispatchToProps = mapDispatchToProps(redux.dispatch, ...args);

            let currentState = mapStateToProps(redux.getState(), ...args);

            if (typeof currentState === 'object' && Object.keys(currentState).length)
                unsubscribe = redux.subscribe(newComponent);
            else currentState = {};

            if (JSON.stringify(currentState) !== JSON.stringify(prevState)) {
                prevState = currentState;
                component({ ...currentState, ...mapDispatchToProps });
            }
        }

        return newComponent;
    }

}