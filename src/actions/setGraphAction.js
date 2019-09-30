const SET_GRAPHDATA = "SET_GRAPHDATA";

function setGraphData(data){
    return {
        type: SET_GRAPHDATA,
        data
    }
}

export default setGraphData;