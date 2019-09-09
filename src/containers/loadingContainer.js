import React from 'react';
import { connect } from 'react-redux';
import MainLoading from '../components/mainLoading';


class LoadingContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.isFetching ? this.props.children : 
                <MainLoading 
                    size="15"
                />}
            </div>

        )
    }
}

const mapStateToProps = function(state){
    return {
        isFetching: state.fetchingReducer.isFetching
    }
}

export default connect (mapStateToProps)(LoadingContainer);