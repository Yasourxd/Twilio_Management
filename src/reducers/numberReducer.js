function numberReducer (state, action){
    switch(action.type){
        case 'ADD_NUMBER':
            return {
                numbers: state.numbers.concat(action.numbers)
            }
        case 'DEL_NUMBER':
            return {
                numbers: state.numbers.filter(number => number.ID != action.payload)
            }
        case 'UPDATE_NUMBER':
            return {
                numbers: state.numbers.map(
                    number => number.ID == action.numbers.ID ? 
                    {...number,
                    FNAME: action.numbers.FNAME,
                    LNAME: action.numbers.LNAME,
                    PHONE: action.numbers.PHONE
                    } : number
                )
            }
        default:
            return state;
    }
}

export default numberReducer;