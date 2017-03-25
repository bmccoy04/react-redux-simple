// import React from "react";
// import ReactDOM from "react-dom";

// import Layout from "./components/Layout";

// const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);

import { combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {       
    const newState = {...state};     
    switch (action.type) {
        case "CHANGE_NAME":
            newState.name = action.payload;
            console.log("Name chanage " + state.name);
            break;
        case "CHANGE_AGE":
            newState.age = action.payload;
            console.log("Age chaange " + state);
            break;
    }
    return newState;
}

const tweetsReducer = (state=[], action) => {
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
})

const reducer = function (state, action) {
    if (action.type === 'INC')
        return state = state + action.payload;
    if (action.type === 'DEC')
        return state = state - action.payload;

    return state;
    //return newState;
}

// const store = createStore(reducer, {
//     user: {
//         Name: "Bryan",
//         age: 33
//     },
//     Tweets: []
// });
const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed ", store.getState());
});

store.dispatch({ type: "CHANGE_NAME", payload: "Bryan" });
store.dispatch({ type: "CHANGE_AGE", payload: 34 });
store.dispatch({ type: "CHANGE_AGE", payload: 35 });
