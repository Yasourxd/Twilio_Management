import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import addForm from '../actions/addFormAction';

import FormList from '../components/formList';

import addNumber from '../actions/addNumberAction';
import delNumber from '../actions/delNumberAction';
import updateNumber from '../actions/updateNumberAction';
import addFormNumber from '../actions/addFormNumberAction';
import delFormNumber from '../actions/delFormNumberAction';
import setFormFetching from '../actions/formFetcingAction';
import resetFormNumber from '../actions/resetFormNumbers';
import setNavbarTitle from '../actions/setNavbarTitleAction';

class FormContainer extends React.Component{
    constructor(props){
        super(props)

        this.handleAddFormNumber = this.handleAddFormNumber.bind(this);
        this.handleDelFormNumber = this.handleDelFormNumber.bind(this);
        this.handleFetchForm = this.handleFetchForm.bind(this);
        this.handleFetchFormNumber = this.handleFetchFormNumber.bind(this);
        this.state = {
            formID: this.props.forms.ID,
            offset: 0
        }
    }

    handleAddFormNumber(notAddNum, selectedNum, formNumber){
        console.log("geliyor buraya");
        for(var i = 0; i < notAddNum.length;i++){
            if(selectedNum[i]){
                this.props.addFormNumber(Math.floor(Math.random()*124578963 + 12453897),formNumber, notAddNum[i].ID, notAddNum[i].FNAME, notAddNum[i].LNAME, notAddNum[i].PHONE)
            }
        }
        axios.post(`http://localhost:3636/addFormNumber/1/${formNumber}`, {
            notAddNum,
            selectedNum
        })
    }

    handleDelFormNumber(ID){
        this.props.delFormNumber(ID);
        axios.get(`http://localhost:3636/delFormNumber/1/${ID}`)
    }
    handleFetchForm(){
        axios.get(`http://localhost:3636/forms/69144066531945e2a1979e118a0b3ddd/${this.props.formFetching.offset}`)
        .then(response => {
            if(response.data.data.length != 0){
                response.data.data.map(item => this.props.addForm(item.id, item.title));
                this.props.setFormFetching(this.props.formFetching.offset + 20, true);
            }else{
                this.props.setFormFetching(this.props.formFetching.offset, false);
            }
        })
    }
    handleFetchFormNumber(formID){
        axios.get(`http://localhost:3636/formnumbers/1/${formID}`)
        .then(response => {
            this.props.resetFormNumber();
            if(response.data.data.length != 0){
                response.data.data.map(item => this.props.addFormNumber(item.FORMID, item.FORMNUMBER, item.PHONEID, item.FNAME, item.LNAME, item.PHONE, item.LOGID, item.CALLSTATUS, item.SUBID, item.CALLSID))
            }
        })
    }


    render(){
        return(
            <FormList
                numbers={this.props.numbers}
                forms= {this.props.forms}
                formNumbers = {this.props.formNumbers}
                handleAddFormNumber = {this.handleAddFormNumber}
                formID = {this.state.formID}
                handleDelFormNumber = {this.handleDelFormNumber}
                handleFetchForm = {this.handleFetchForm}
                formFetching = {this.props.formFetching}
                handleFetchFormNumber = {this.handleFetchFormNumber}
                setNavbarTitle = {this.props.setNavbarTitle}
            >
                                
            </FormList>
        )
    }
}

const mapStateToProps = function(state){
    return {
        numbers: state.contactList.numbers,
        forms: state.formList.forms,
        formNumbers: state.formNumberReducer.formNumbers,
        formFetching: state.formFetchingReducer.formFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (id, FNAME, LNAME, PHONE) => dispatch(addNumber(id, FNAME, LNAME, PHONE)),
        delNumber: (id) => dispatch(delNumber(id)),
        updateNumber: (id, FNAME, LNAME, PHONE) => dispatch(updateNumber(id, FNAME, LNAME, PHONE)),
        addFormNumber: (id, FORMNUMBER, PHONEID, FNAME, LNAME, PHONE, LOGID, CALLSTATUS, SUBID, CALLSID) => dispatch(addFormNumber(id, FORMNUMBER, PHONEID, FNAME, LNAME, PHONE, LOGID, CALLSTATUS, SUBID, CALLSID)),
        delFormNumber: (ID) => dispatch(delFormNumber(ID)),
        addForm: (id, title) => dispatch(addForm(id, title)),
        setFormFetching: (offset, hasMore) => dispatch(setFormFetching(offset, hasMore)),
        resetFormNumber: () => dispatch(resetFormNumber()),
        setNavbarTitle: (title) => dispatch(setNavbarTitle(title))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);