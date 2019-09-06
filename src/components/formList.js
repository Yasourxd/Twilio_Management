import React from 'react';

import useStyles from '../themes/formListTheme';
import AddedNumber from '../components/addedNumbers';
import AddFormnNumberDialog from './addFormNumber'


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
                    <Paper className={[classes.paper, classes.gridContainer].join(" ")}>
                        <Toolbar className={[classes.toolbar, classes.header].join(" ")}>
                            <Typography variant="h6" noWrap>
                                Form List
                            </Typography>
                        </Toolbar>
                        <List>
                            {props.forms.map(form => {
                                return (
                                    <ListItem button onClick={(e) => handleFormNumber(form.ID)}>
                                        <ListItemIcon className={classes.ListIcon}>
                                            <InsertDriveFileIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={form.TITLE} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs= {12} md = {9} >
                    <AddedNumber 
                        formNumbers={filtered ? filteredFormNumbers : [] }
                        selectedForm = {selectedForm ? selectedForm : ""}
                        numbers2 = {props.formNumbers}
                        handleDelFormNumber = {props.handleDelFormNumber}
                    />
                </Grid>
            </Grid>{addButtonVisibility ? <div style={{position:"absolute",bottom:10,right:70}}>
                <Fab color="secondary" onClick={fetch("http://localhost:3001/createcall/92293453650964")}>
                    <PhoneInTalkIcon />
                </Fab> 
            </div>: ""
                
            }
            
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