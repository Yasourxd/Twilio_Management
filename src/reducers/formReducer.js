function formReducer (state = { forms: [] }, action){
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