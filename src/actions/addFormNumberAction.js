const ADD_FORMNUMBER = "ADD_FORMNUMBER";

function addFormNumber(ID, FORMNUMBER, PHONEID, FNAME, LNAME, PHONE, LOGID, CALLSTATUS, SUBID, CALLSID){
    return {
        type:ADD_FORMNUMBER,
        formNumber: {
            ID: ID,
            FORMNUMBER: FORMNUMBER,
            PHONEID: PHONEID,
            FNAME: FNAME,
            LNAME: LNAME,
            PHONE: PHONE,
            LOGID: LOGID || null,
            CALLSTATUS: CALLSTATUS || 'Not Started',
            SUBID: SUBID || null,
            CALLSID: CALLSID || null
        }
    }
}

export default addFormNumber;