import { applyMiddleware, createStore } from "redux";

const reducer = function (state, action) {
    if (action.type === 'INC')
        return state = state + 1;
    if (action.type === 'DEC')
        return state = state - 1;
    if(action.type === 'E')
        throw new Error("error");

    return state;
}

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try{
        next(action);
    } catch(e){
        console.log("Error: ", e);
    }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
    console.log("stored changed ", store.getState());
})

store.dispatch({ type: "INC"});
store.dispatch({ type: "INC"});
store.dispatch({ type: "DEC"});
store.dispatch({ type: "E"});

