import React from 'react';

import useStyles from '../themes/numberTheme';
import UpdatenumberDialog from './updateNumber';
import DeleteNumber from './numberDelete';

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

import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


export default function HandleNumbers (props){
    const classes = useStyles();
    var [filter, setFilter] = React.useState(false);
    var [numbers, setNumbers] = React.useState([]);

    function handleFilter(value){
        setNumbers(props.numbers.filter(number => number.FNAME.includes(value) || number.LNAME.includes(value) ||number.PHONE.includes(value)));
        setFilter(true);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <InputBase 
                            placeholder="Search..."
                            className={[classes.inputRoot, classes.inputInput].join(' ')}
                            inputProps={{'arial-label': 'search'}}
                            onChange = {e => {
                                handleFilter(e.target.value);
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper className={[classes.paper, classes.gridContainer, classes.space].join(' ')} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className = {classes.header}>ID</TableCell>
                                    <TableCell className = {classes.header}>First Name</TableCell>
                                    <TableCell className = {classes.header}>Last Name</TableCell>
                                    <TableCell className = {classes.header}>Phone Number</TableCell>
                                    <TableCell className={[classes.rightButtonWidth, classes.header].join(" ")}>  </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(filter ? numbers : props.numbers).map((number,count=0) => {
                                    return(
                                        <TableRow>
                                            <TableCell>{++count}</TableCell>
                                            <TableCell>{number.FNAME.charAt(0).toUpperCase() + number.FNAME.slice(1)}</TableCell>
                                            <TableCell>{number.LNAME.charAt(0).toUpperCase() + number.LNAME.slice(1)}</TableCell>
                                            <TableCell>{number.PHONE}</TableCell>
                                            <TableCell align="right" style={{display:"flex"}}>
                                                {/* <Fab  size="small" color="secondary" arial-label="Delete" onClick={() => props.delNumber(number.ID)} className={classes.deleteButton}>
                                                    <DeleteIcon />
                                                </Fab> */}
                                                <DeleteNumber className={classes.deleteButton}
                                                    title="Do you really want to delete this number permanently?"
                                                    subtitle="You are deleting this number permanently. This number will also removed from your forms and call logs."
                                                    action={props.delNumber}
                                                    ID={number.ID}
                                                />
                                                <UpdatenumberDialog 
                                                    PHONEID = {number.ID}
                                                    FNAME = {number.FNAME}
                                                    LNAME = {number.LNAME}
                                                    PHONE = {number.PHONE}
                                                    updateNumber = {props.updateNumber}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            <Grid xs={12} style={{height:'20px'}}>

                            </Grid>

                        </Table>
                    </Paper>

                </Grid>
            </Grid>
            {props.children}
        </div>
    )
}