const initialState = {
    logDetail: []
}

function logDetailsReducer (state = initialState, action){
    switch(action.type){
        case 'LOG_DETAILS':
            return {
                logDetail: state.logDetail.concat({
                    LOGID: action.LOGID,
                    LOG: action.logDetail
                })
            }
        default: 
            return state;
    }
}

export default logDetailsReducer;