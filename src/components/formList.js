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


//Material-ui Icons
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function FormList (props){
    const classes = useStyles();
    var [filteredFormNumbers, setFilteredFormNumbers] = React.useState();
    var [filtered, setFiltered] = React.useState(false);
    var [selectedForm, setSelectedForm] = React.useState();
    var [notAddedNumbers, setNotAddedNumbers] = React.useState([]);

    function handleFormNumber(id){
        setSelectedForm(id);
        setFilteredFormNumbers(props.formNumbers.filter(number => number.FORMNUMBER == id));
        setFiltered(true);
    }

    function handleNotAdded(){
        let tempFormNumbers = Array.from(filteredFormNumbers, number => number.PHONE);
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
                                    <ListItem button onClick={() => handleFormNumber(form.ID)}>
                                        <ListItemIcon className={classes.ListIcon}>
                                            <ArrowRightIcon />
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
                    />
                </Grid>
            </Grid>
            <AddFormnNumberDialog
                selectedForm = {selectedForm}
                numbers = {props.numbers}
                handleNotAdded = {handleNotAdded}
                notAddedNumbers = {notAddedNumbers}
                handleAddFormNumber = {props.handleAddFormNumber}
                selectedForm = {selectedForm}
            />
        </div>
    )
}