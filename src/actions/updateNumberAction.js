const UPDATE_NUMBER = "UPDATE_NUMBER";

function updateNumber(ID, FNAME, LNAME, PHONE){
    return {
        type: UPDATE_NUMBER,
        numbers: {
            ID: ID,
            FNAME: FNAME,
            LNAME: LNAME,
            PHONE: PHONE
        }
    }
}

export default updateNumber;