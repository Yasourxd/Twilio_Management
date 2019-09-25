const initialState = {
    title: ''
}

function navbarReducer(state = initialState, action){
    switch(action.type){
        case 'SET_NAVBARTITLE':
            return {
                title: action.title
            }
        default:
            return state;
    }
}

export default navbarReducer;