const SET_FETCH = "SET_FETCH";

function setFetch(value){
    return {
        type: SET_FETCH,
        payload: value
    }
}

export default setFetch;