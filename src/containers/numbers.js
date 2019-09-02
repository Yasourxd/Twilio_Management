import React from 'react';
import { connect } from 'react-redux';

import HandleNumbers from '../components/numbers';
import AddnumberDialog from '../components/addNumber'

import addNumber from '../actions/addNumberAction';

class Numbers extends React.Component{
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(id, FNAME, LNAME, PHONE){
        this.props.addNumber(id, FNAME, LNAME, PHONE);
    }
    render(){
        return(
            <HandleNumbers
                numbers={this.props.numbers}
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
        addNumber: (id, FNAME, LNAME, PHONE) => dispatch(addNumber(id, FNAME, LNAME, PHONE))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Numbers);

