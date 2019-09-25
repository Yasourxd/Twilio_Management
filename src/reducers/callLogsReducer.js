const initialState = {
    callLogs: []
}

function callLogsReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_CALLLOGS':
            return {
                callLogs : state.callLogs.concat(action.log)
            }
        default:
            return state;
    }

}

export default callLogsReducer;