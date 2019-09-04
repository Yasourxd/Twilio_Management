import React from 'react';
import { connect } from 'react-redux'

import FormList from '../components/formList';

import addNumber from '../actions/addNumberAction';
import delNumber from '../actions/delNumberAction';
import updateNumber from '../actions/updateNumberAction';

class FormContainer extends React.Component{
    render(){
        return(
            <FormList
                numbers={this.props.numbers}
                forms= {this.props.forms}
                formNumbers = {this.props.formNumbers}
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
        updateNumber: (id, FNAME, LNAME, PHONE) => dispatch(updateNumber(id, FNAME, LNAME, PHONE))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);