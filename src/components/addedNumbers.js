import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import RecallComponent from './recallComponent';

import useStyles from '../themes/numberTheme';
import UpdatenumberDialog from './updateNumber';
import InfiniteScrollComponent from './infiniteScrollComponent';
import CallStatusComponent from './callStatusComponent';
import DeleteNumber from './numberDelete';
import MyMenuItem from './menuItem';

//Material-ui Core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment';

//Material-ui Icons
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';


export default function AddedNumber (props){
    const classes = useStyles();
    var [filter, setFilter] = React.useState(false);
    var [numbers, setNumbers] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {formNumbers} = props

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
    function handleClose(){
        setAnchorEl(null);
    };

    function handleFilter(value){
        setNumbers(props.formNumbers.filter(number => number.FNAME.includes(value) || number.LNAME.includes(value) || number.PHONE.includes(value) || number.CALLSTATUS.includes(value)));
        setFilter(true);
    }
    const handleSubTab = (formNumber, subID) => {
        window.open(`https://www.jotform.com/inbox/${formNumber}/${subID}`, '_blank');
        handleClose();

    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0} style={{}}>
                        <InputBase 
                            placeholder="Search"
                            className={[classes.inputRoot, classes.inputInput].join(' ')}
                            startAdornment={
                                <IconButton size="small" style={{backgroundColor:"transparent",cursor:"default", pointerEvents:"none"}}>
                                    <SearchIcon style={{marginRight:"10px"}}/>
                                </IconButton>
                              }
                              
                            onChange = {e => {
                                handleFilter(e.target.value);
                                console.log(e.target.value);
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper id = "scroll" className={[classes.paper, classes.gridContainer, classes.space].join(' ')} elevation={0}>
                        <InfiniteScrollComponent
                            target="scroll"
                            data = {props.formNumbers}
                            emptyText = "No number is registered for selected form"
                        >
                        <Table>
                            <TableHead>
                                <TableRow> 
                                    <TableCell className = {classes.header}>ID</TableCell>
                                    <TableCell className = {classes.header}>First Name</TableCell>
                                    <TableCell className = {classes.header}>Last Name</TableCell>
                                    <TableCell className = {classes.header}>Phone Number</TableCell>
                                    <TableCell className = {classes.header}>Status</TableCell>
                                    <TableCell className={[classes.rightButtonWidth, classes.header].join(" ")}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                {
                                    (filter ? numbers : formNumbers).map((number, count=0) => {
                                        return (
                                            <TableRow>
                                                {console.log(number)}
                                                <TableCell>{++count}</TableCell>
                                                <TableCell>{number.FNAME.charAt(0).toUpperCase() + number.FNAME.slice(1)}</TableCell>
                                                <TableCell>{number.LNAME.charAt(0).toUpperCase() + number.LNAME.slice(1)}</TableCell>
                                                <TableCell>{number.PHONE}</TableCell>
                                                <TableCell>
                                                    <CallStatusComponent 
                                                        status = {number.CALLSTATUS}
                                                    />
                                                </TableCell>
                                                <TableCell align="right" style={{display:"flex", alignItems:"center"}}>
                                                    
                                                    
                                                    {/* <Fab size="small" color="secondary" arial-label="Delete" onClick={() => props.handleDelFormNumber(number.ID)} className={classes.deleteButton}>
                                                        <DeleteIcon />
                                                    </Fab> */}
                                                    {
                                                        number.CALLSTATUS == 'Success' || number.CALLSTATUS == 'Failed' ?
                                                            <div>
                                                                {/* <Fab size="small" arial-label="Detail-Menu" onClick = {handleClick}> */}
                                                                {console.log("subID", number.SUBID)}
                                                                <IndividualMenu 
                                                                    number = {number}
                                                                    setNavbarTitle = {props.setNavbarTitle}
                                                                />
                                                                
                                                                {/* </Fab> */}
                                                                
                                                            </div>
                                                            
                                                            
                                                        : null
                                                    }
                                                    <DeleteNumber 
                                                        title= "Do you really want to remove the number from this form?"
                                                        subtitle= "You are removing the number from this form. This action will not delete the number in your contact list. You can add this number to this form again anytime you want."
                                                        action= {props.handleDelFormNumber}
                                                        ID = {number.ID}
                                                    />
                                                    {
                                                        number.CALLSTATUS == 'Failed' || number.CALLSTATUS == 'Not Started'?
                                                        <RecallComponent 
                                                            title={number.CALLSTATUS == 'Not Started' ? "Do you really want to create a call for this number?": "Do you really want to create a re-call for this number?"}
                                                            subtitle={number.CALLSTATUS == 'Not Started' ? "You are creating a call for selected number. The system will call only the selected number.If you want to create all numbers are registered to the form. You can use Create Call button which is at the right bottom of the page." : "You are creating a re-call for selected number. The system will call only the selected number.If you want to create all numbers are registered to the form. You can use Create Call button which is at the right bottom of the page."}
                                                            data={number}
                                                            action = {
                                                                () => axios({
                                                                    method: "POST",
                                                                    url: `https://6a79ab57.ngrok.io/createcall/${number.FORMNUMBER}`,
                                                                    data: {
                                                                        formNumber: Array(number)
                                                                    }
                                                                    ,
                                                                    headers: {
                                                                        'Content-Type': 'text/plain',
                                                                    }
                                                                })
                                                            }
                                                        />
                                                        : null
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                                
                            </TableBody>
                            <Grid xs={12} style={{height:'20px'}}>

                            </Grid>
                        </Table>
                        </InfiniteScrollComponent>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const IndividualMenu  = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
    function handleClose(){
        setAnchorEl(null);
    };
    
    function handleSubTab(formNumber, subID){
        window.open(`https://www.jotform.com/inbox/${formNumber}/${subID}`, '_blank');
        handleClose();
    }

    return (
        <div>
        <IconButton arial-label="more" onClick = {handleClick}>
            <MoreHorizIcon/>
        </IconButton>
        <Menu style={{marginTop:"60px"}}
            id="Detail-Menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={() => handleSubTab(props.number.FORMNUMBER, props.number.SUBID)}>Submission</MenuItem>
            {/* <MyMenuItem 
                formNumber = {number.FORMNUMBER}
                subID = {number.SUBID}
                title= "Submission"
            /> */}
            <MenuItem><Link style={{color:'inherit', textDecoration:'none'}} to={`/calls/${props.number.CALLSID}`} onClick={() => props.setNavbarTitle('Call Logs')}>Call Log</Link></MenuItem>
        </Menu>
        </div>
    )
}