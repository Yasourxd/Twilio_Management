const initialState = {
    formFetching: {
        offset: 20,
        hasMore: true
    }
}


function formFetchingReducer(state = initialState, action){
    switch(action.type){
        case 'SET_FORMFETCHING':
            return {
                formFetching: action.formFetching
            }
        default: 
            return state;
    }
}

export default formFetchingReducer;