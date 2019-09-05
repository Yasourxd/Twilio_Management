import React from 'react';
import { connect } from 'react-redux'

import FormList from '../components/formList';

import addNumber from '../actions/addNumberAction';
import delNumber from '../actions/delNumberAction';
import updateNumber from '../actions/updateNumberAction';
import addFormNumber from '../actions/addFormNumberAction';

class FormContainer extends React.Component{
    constructor(props){
        super(props)

        this.handleAddFormNumber = this.handleAddFormNumber.bind(this);
        this.state = {
            formID: this.props.forms.ID 
        }
    }

    handleAddFormNumber(notAddNum, selectedNum, formNumber){
        console.log("geliyor buraya");
        for(var i = 0; i < notAddNum.length;i++){
            if(selectedNum[i]){
                this.props.addFormNumber(5,formNumber, notAddNum[i].ID, notAddNum[i].FNAME, notAddNum[i].LNAME, notAddNum[i].PHONE )
            }
        }

    }

    render(){
        return(
            <FormList
                numbers={this.props.numbers}
                forms= {this.props.forms}
                formNumbers = {this.props.formNumbers}
                handleAddFormNumber = {this.handleAddFormNumber}
                formID = {this.state.formID}
            >
                                
            </FormList>
        )
    }
}

const mapStateToProps = function(state){
    return {
        numbers: state.numberReducer.numbers,
        forms: state.formReducer.forms,
        formNumbers: state.formNumberReducer.formNumbers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (id, FNAME, LNAME, PHONE) => dispatch(addNumber(id, FNAME, LNAME, PHONE)),
        delNumber: (id) => dispatch(delNumber(id)),
        updateNumber: (id, FNAME, LNAME, PHONE) => dispatch(updateNumber(id, FNAME, LNAME, PHONE)),
        addFormNumber: (id, FORMNUMBER, PHONEID, FNAME, LNAME, PHONE) => dispatch(addFormNumber(id, FORMNUMBER, PHONEID, FNAME, LNAME, PHONE))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);