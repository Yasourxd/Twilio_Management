function formNumberReducer (state = {formNumbers:[] },action){
    switch(action.type){
        case 'ADD_FORMNUMBER':
            return{
                formNumbers: state.formNumbers.concat(action.formNumber)
            }
        case 'DEL_FORMNUMBER':
            return{
                formNumbers: state.formNumbers.filter(number => number.ID != action.payload)
            }
        default:
            return state;
    }
}

export default formNumberReducer;