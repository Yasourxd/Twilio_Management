const initialState = {
    cards: {}
}

function dashboardCardReducer(state = initialState, action){
    switch(action.type){
        case 'SET_DASHBOARDCARDS':
            return {
                cards: action.cards
            }
        default:
            return state;
    }
}

export default dashboardCardReducer;