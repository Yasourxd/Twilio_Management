const initialState = {
    forms: []
}

function formReducer (state = initialState, action){
    switch(action.type){
        case 'ADD_FORM':
            return {
                forms: state.forms.concat(action.forms)
            }
        default:
            return state;
    }
}

export default formReducer;