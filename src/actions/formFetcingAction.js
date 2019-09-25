const SET_FORMFETCHING = "SET_FORMFETCHING";

function setFormFetching(offset, hasMore){
    return {
        type: SET_FORMFETCHING,
        formFetching: {
            offset,
            hasMore
        }
    }
}

export default setFormFetching;