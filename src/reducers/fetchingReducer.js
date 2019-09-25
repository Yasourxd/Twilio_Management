const initialState = {
    isFetching: false
}

function fetchingReducer(state = initialState, action){
    switch (action.type){
        case 'SET_FETCH':
            return {
                isFetching: action.payload
            }
        default:
            return state;
    }   
}

export default fetchingReducer;