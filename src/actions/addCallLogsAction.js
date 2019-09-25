const ADD_CALLLOGS = "ADD_CALLLOGS";

function addCallLog(LOGID,CALLSTATUS, FORMID, SUBID, CALLSID, FNAME, LNAME, PHONE, FORMNUMBER){
    return {
        type: ADD_CALLLOGS,
        log: {
            LOGID,
            CALLSTATUS,
            FORMID,
            SUBID,
            CALLSID,
            FNAME,
            LNAME,
            PHONE,
            FORMNUMBER
        }
    }
}
export default addCallLog;