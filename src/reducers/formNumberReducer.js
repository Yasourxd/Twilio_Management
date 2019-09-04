function formNumberReducer (state = {formNumbers:[] },action){
    switch(action.type){
        case 'ADD_FORMNUMBER':
            return{
                formNumbers: state.formNumbers.concat(action.formNumber)
            }
        default:
            return state;
    }
}

export default formNumberReducer;