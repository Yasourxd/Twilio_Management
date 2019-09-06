const DEL_FORMNUMBER = "DEL_FORMNUMBER";

function delFormNumber(ID){
    return{
        type: DEL_FORMNUMBER,
        payload: ID
    }
}

export default delFormNumber;