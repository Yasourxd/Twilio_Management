const ADD_NUMBER = "ADD_NUMBER";

function addNumber(ID, FNAME, LNAME, PHONE){
    return {
        type:ADD_NUMBER,
        numbers: {
            ID: ID,
            FNAME: FNAME,
            LNAME: LNAME,
            PHONE: PHONE
        }
    }
}

export default addNumber;