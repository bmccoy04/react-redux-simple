
import { createStore } from "redux";

const reducer = function (state, action) {
    if (action.type === 'INC')
        return state = state + 1;
    if (action.type === 'DEC')
        return state = state - 1;

    return state;
    //return newState;
}

const store = createStore(reducer, 0);


store.subscribe(() => {
    console.log("store changed ", store.getState());
});

store.dispatch({ type: "INC"});
store.dispatch({ type: "INC"});
store.dispatch({ type: "DEC"});
