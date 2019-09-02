function numberReducer (state, action){
    switch(action.type){
        case 'ADD_NUMBER':
            return {
                numbers: state.numbers.concat(action.numbers)
            }
        default:
            return state;
    }
}

export default numberReducer;