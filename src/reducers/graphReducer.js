const initialState = {
    graph: []
}

function graphReducer (state = initialState, action){
    switch(action.type){
        case 'SET_GRAPHDATA':
            return {
                graph: action.data
            }
        default:
            return state;
    }
}

export default graphReducer;