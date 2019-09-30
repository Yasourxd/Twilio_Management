import React from 'react';
import { connect } from 'react-redux';

import HandleDasboard from '../components/dashboard';

class Dashboard extends React.Component{
    render(){
        return(
            <HandleDasboard
                cards = {this.props.cards}
                graph = {this.props.graph}
            >
                {this.props.children}
            </HandleDasboard>
        )
    }
}
const mapStateToProps = function(state){
    return {
        numbers: state.numbers,
        cards: state.dashCards.cards,
        graph: state.graph.graph
    }
}
export default connect(mapStateToProps)(Dashboard);