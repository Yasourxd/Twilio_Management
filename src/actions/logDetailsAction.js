const LOG_DETAILS = "LOG_DETAILS";

function logDetails(LOGID, LOG){
    return {
        type: LOG_DETAILS,
        LOGID,
        logDetail: LOG
    }
}

export default logDetails;