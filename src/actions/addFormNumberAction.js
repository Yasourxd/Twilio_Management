const ADD_FORMNUMBER = "ADD_FORMNUMBER";

function addFormNumber(ID, FORMNUMBER, PHONEID, FNAME, LNAME, PHONE){
    return {
        type:ADD_FORMNUMBER,
        formNumber: {
            ID: ID,
            FORMNUMBER: FORMNUMBER,
            PHONEID: PHONEID,
            FNAME: FNAME,
            LNAME: LNAME,
            PHONE: PHONE
        }
    }
}

export default addFormNumber;