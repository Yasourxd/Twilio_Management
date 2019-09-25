import React, {PureComponent} from 'react';

export default class TitleForNavbar extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            text: 'Dashboard'
        }
        this.handleTitle = this.handleTitle.bind(this);
    }
    

    shouldComponentUpdate(){
        switch(window.location.href.slice(22)){
            case 'calls':
                this.setState({
                    text: 'Call Logs'
                })
            default:
                this.setState('Where my title...')
        }
    }
    handleTitle(){
        console.log("aa",this.props.match)
        switch(window.location.href.slice(22)){
            case 'calls':
                return 'Call Logs'
            default:
                return 'we dont know where we are'
        }
    }

    render(){
        return(
            <p>{this.state.text}</p>
        )
    }
}