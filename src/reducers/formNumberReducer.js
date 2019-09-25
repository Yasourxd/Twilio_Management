const initialState = {
    formNumbers: []
}

function formNumberReducer (state = initialState, action){
    switch(action.type){
        case 'ADD_FORMNUMBER':
            return{
                formNumbers: state.formNumbers.concat(action.formNumber)
            }
        case 'DEL_FORMNUMBER':
            return{
                formNumbers: state.formNumbers.filter(number => number.ID != action.payload)
            }
        case 'RESET_FORMNUMER':
            return initialState;
        default:
            return state;
    }
}

export default formNumberReducer;