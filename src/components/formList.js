import React from 'react';
import clsx from 'clsx';
import axios from 'axios';

import useStyles from '../themes/formListTheme';
import AddedNumber from '../components/addedNumbers';
import AddFormnNumberDialog from './addFormNumber';
import InfiniteScrollComponent from './infiniteScrollComponent';
import CreateCallComponent from './createCall';



//Material-ui Core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Fab from '@material-ui/core/Fab'


//Material-ui Icons
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';

export default function FormList (props){
    const classes = useStyles();
    var [filteredFormNumbers, setFilteredFormNumbers] = React.useState();
    var [filtered, setFiltered] = React.useState(false);
    var [selectedForm, setSelectedForm] = React.useState();
    var [notAddedNumbers, setNotAddedNumbers] = React.useState([]);
    var [addButtonVisibility, setAddButtonVisibility] = React.useState(false);

    function handleFormNumber(id){
        setSelectedForm(id);
        setFilteredFormNumbers(props.formNumbers.filter(number => number.FORMNUMBER == id));
        setFiltered(true);
        setAddButtonVisibility(true);
        props.handleFetchFormNumber(id);
    }

    function handleNotAdded(){
        let tempFormNumbers = Array.from(props.formNumbers.filter(number => number.FORMNUMBER == selectedForm), number => number.PHONE);
        console.log(tempFormNumbers);
        setNotAddedNumbers(props.numbers.filter(number => tempFormNumbers.includes(number.PHONE) ? false : true));
        console.log(props.numbers.filter(number => tempFormNumbers.includes(number.PHONE) ? false : true));

    }

    return(
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Paper id="scroll" className={[classes.paper, classes.gridContainer].join(" ")} elevation={0}>
                        <Toolbar className={[classes.toolbar, classes.header].join(" ")}>
                            <Typography variant="h6" noWrap >
                                Form List
                            </Typography>
                        </Toolbar>
                        <InfiniteScrollComponent
                            target="scroll"
                            next = {props.handleFetchForm}
                            data = {props.forms}
                            hasMore = {props.formFetching.hasMore}
                            emptyText = "There is no Form."
                        >
                        <List>
                            {props.forms.map(form => {
                                return (
                                    <ListItem button onClick={(e) => handleFormNumber(form.ID)}
                                        className={clsx({
                                            [classes.active]: selectedForm == form.ID
                                        })}
                                    >
                                        {/* <ListItemIcon className={classes.ListIcon}>
                                            <LibraryBooksOutlinedIcon />
                                        </ListItemIcon> */}
                                        <ListItemText primary={form.TITLE}/>
                                    </ListItem>
                                )
                            })}
                        </List>
                        </InfiniteScrollComponent>
                    </Paper>
                </Grid>
                <Grid item xs= {12} md = {9} >
                    <AddedNumber 
                        selectedForm = {selectedForm}
                        formNumbers = {props.formNumbers}
                        handleDelFormNumber = {props.handleDelFormNumber}
                        setNavbarTitle = {props.setNavbarTitle}
                        numbers = {props.numbers}
                    />
                </Grid>
            </Grid>
            {/* {addButtonVisibility ? <div style={{position:"absolute",bottom:10,right:70}}>
                <Fab color="secondary" onClick={() => axios({
                    method: "POST",
                    url: `https://68c652b3.ngrok.io/createcall/${selectedForm}`,
                    data: {
                        formNumber: props.formNumbers
                    }
                    ,
                    headers: {
                        'Content-Type': 'text/plain',
                    }
                })
                }>
                    <PhoneInTalkIcon />
                </Fab> 
            </div>: ""
                
            } */}
            {addButtonVisibility ? 
            <CreateCallComponent 
                handleCreateCall = {() => axios({
                    method: "POST",
                    url: `https://6a79ab57.ngrok.io/createcall/${selectedForm}`,
                    data: {
                        formNumber: props.formNumbers
                    }
                    ,
                    headers: {
                        'Content-Type': 'text/plain',
                    }
                })

                }
            /> : null}
            
            {addButtonVisibility ? 
            
            <AddFormnNumberDialog
            selectedForm = {selectedForm}
            numbers = {props.numbers}
            handleNotAdded = {handleNotAdded}
            notAddedNumbers = {notAddedNumbers}
            handleAddFormNumber = {props.handleAddFormNumber}
            selectedForm = {selectedForm}
            /> : ""
        }
            
        </div>
    )
}