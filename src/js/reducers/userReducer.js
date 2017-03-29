export default function reducer(state={
    user:{
        id:null,
        name: null,
        age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action){
    switch(action.type){
        case "FETCH_USER":{
            return {...state, fetching: true}
        }
        case "FETCH_USER_REJECTED":{
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_USER_FULFILLED":{
            return {
                ...state,
                fetching: false,
                fetched: true,
                tweets: action.payload
            }
        }
        case "SER_USER_NAME":{
            return {
                ...state,
                user: {...state.user, name: action.payload},
            }
        }
    }
    return state;
}