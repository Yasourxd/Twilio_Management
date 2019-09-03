const DEL_NUMBER = "DEL_NUMBER";

function delNumber(ID){
    return{
        type: DEL_NUMBER,
        payload: ID
    }
}

export default delNumber;