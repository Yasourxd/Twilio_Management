import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

//Material-ui Core
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default class ListItemLink extends PureComponent {

    render() {
        const {icon, classes, title, to } = this.props;

        return (
        <ListItem button component={NavLink} exact to={to} activeClassName={classes.active}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
        );
    }
}
