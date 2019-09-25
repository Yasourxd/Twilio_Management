import React from 'react';
import { connect } from 'react-redux';

import HandleNavbar from '../components/navbar';
import setNavbarTitle from '../actions/setNavbarTitleAction';

class Navbar extends React.Component{
    render(){
        return(
            
            <HandleNavbar
                setNavbarTitle = {this.props.setNavbarTitle}
                navbarTitle = {this.props.navbarTitle}
            >
                {this.props.children}
            </HandleNavbar>
        )
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        setNavbarTitle: (title) => dispatch(setNavbarTitle(title))
    }
}

const mapStateToProps = function(state){
    return {
        navbarTitle: state.navbar.title,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
