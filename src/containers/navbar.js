import React from 'react';

import HandleNavbar from '../components/navbar';

export default class Navbar extends React.Component{
    render(){
        return(
            
            <HandleNavbar>
                {this.props.children}
            </HandleNavbar>
        )
    }
}
