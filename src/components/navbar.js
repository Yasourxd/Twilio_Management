import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import TitleForNavbar from './titleForNavbar';

//Material-ui Core
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';


//Material-ui Icons
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DescriptionIcon from '@material-ui/icons/Description';


import useStyles from '../themes/navbarTheme';
import logo from '../assets/img/logo.png';
import '../themes/main.css'

import ListItemLink from './ListItemLink';

export default function HandleNavbar (props){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [urlForTitle, setUrlForTitle] = React.useState(window.location.href.slice(22));

    function handleDrawerOpen(){
        setOpen(true);
    }

    function handleDrawerClose(){
        setOpen(false);
    }

    (() => {
        console.log("buraya gel location href", window.location.href.slice(21))
        switch(window.location.href.slice(21)){
            case '/':
                props.setNavbarTitle('Dashboard');
                break;
            case '/numbers':
                props.setNavbarTitle('Contact List');
                break;
            case '/forms':
                props.setNavbarTitle('Form List')
                break;
            case '/calls':
                props.setNavbarTitle('Call Logs')
                break;
            default:
                props.setNavbarTitle('Call Logs')
        }
    })();

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => open ? handleDrawerClose() : handleDrawerOpen()}
                    edge="start"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {props.navbarTitle}
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <img src={logo} className={classes.logo} alt="JotForm" />
                </div>
                <Divider />
                <List className={classes.links}>
                    <ListItemLink
                        icon = {<DashboardIcon />}
                        classes = {classes}
                        title = "Dashboard"
                        to = "/"
                        setNavbarTitle = {props.setNavbarTitle}
                    />
                    <ListItemLink
                        icon = {<ContactPhoneIcon />}
                        classes = {classes}
                        title = "Contact List"
                        to = "/numbers"
                        setNavbarTitle = {props.setNavbarTitle}
                    />
                    <ListItemLink
                        icon = {<DescriptionIcon />}
                        classes = {classes}
                        title = "Form List"
                        to = "/forms"
                        setNavbarTitle = {props.setNavbarTitle}
                    />
                    <ListItemLink
                        icon = {<AssignmentTurnedInIcon />}
                        classes = {classes}
                        title = "Call Logs"
                        to = "/calls"
                        setNavbarTitle = {props.setNavbarTitle}
                    />
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {/* 
                    Content
                    is
                    Here!!!
                
                */}
                {props.children}
            </main>
        </div>
    )
}