import React from 'react';
import { connect } from 'react-redux';

import HandleNumbers from '../components/numbers';
import AddnumberDialog from '../components/addNumber'

import addNumber from '../actions/addNumberAction';
import delNumber from '../actions/delNumberAction';
import updateNumber from '../actions/updateNumberAction';

class Numbers extends React.Component{
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
        this.delNumber = this.delNumber.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
    }


    onSubmit(id, FNAME, LNAME, PHONE){
        this.props.addNumber(id, FNAME, LNAME, PHONE);
        fetch(`http://localhost:3636/addnumber/1/${FNAME}/${LNAME}/${PHONE}`);
    }
    delNumber(id){
        this.props.delNumber(id);
        fetch(`http://localhost:3636/delnumber/1/${id}`);
    }
    updateNumber(id, FNAME, LNAME, PHONE){
        this.props.updateNumber(id, FNAME, LNAME, PHONE);
        fetch(`http://localhost:3636/updatenumber/1/${id}/${FNAME}/${LNAME}/${PHONE}`)
    }


    render(){
        return(
            <HandleNumbers
                numbers={this.props.numbers}
                delNumber = {this.delNumber}
                updateNumber = {this.updateNumber}
            >
                <AddnumberDialog 
                    onSubmit = {this.onSubmit}
                />
            </HandleNumbers>
            
        )
    }
}

const mapStateToProps = function(state){
    return {
        numbers: state.numbers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (id, FNAME, LNAME, PHONE) => dispatch(addNumber(id, FNAME, LNAME, PHONE)),
        delNumber: (id) => dispatch(delNumber(id)),
        updateNumber: (id, FNAME, LNAME, PHONE) => dispatch(updateNumber(id, FNAME, LNAME, PHONE))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Numbers);

