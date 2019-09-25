import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import CallLogs from '../components/callLogs';
import logDetails from '../actions/logDetailsAction';

class Calls extends React.Component{
    constructor(props){
        super(props)

        this.handleAddLogDetail = this.handleAddLogDetail.bind(this);
    }

    handleAddLogDetail (logID, callSID){
        console.log("callsid", callSID)
        console.log("log detail filter: ",this.props.logDetails.filter(item => item.LOGID == logID))
        if(this.props.logDetails.filter(item => item.LOG.data.data.sid == callSID).length == 0){
            axios.get(`http://localhost:3636/logdetails/${callSID}`)
            .then(res => {
                this.props.addLogDetails(logID, res);
            })
        }
    }
    render(){
        return(
            <CallLogs
                formNumbers = {this.props.formNumbers}
                callLogs = {this.props.callLogs}
                logDetails = {this.props.logDetails}
                handleAddLogDetail = {this.handleAddLogDetail}
            >

            </CallLogs>
        )
    }
}

const mapStateToProps = function(state){
    return {
        formNumbers : state.formNumberReducer.formNumbers,
        callLogs: state.callLogs.callLogs,
        logDetails: state.logDetails.logDetail
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        addLogDetails: (LOGID, LOG) => dispatch(logDetails(LOGID, LOG))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calls);