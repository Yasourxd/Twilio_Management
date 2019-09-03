import React from 'react';

import useStyles from '../themes/numberTheme';
import UpdatenumberDialog from './updateNumber';

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

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <InputBase 
                            placeholder="Search..."
                            className={[classes.inputRoot, classes.inputInput].join(' ')}
                            inputProps={{'arial-label': 'search'}}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell className={classes.rightButtonWidth}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {console.log(props.numbers)}
                                {props.numbers.map((number,count=0) => {
                                    return(
                                        <TableRow>
                                            <TableCell>{++count}</TableCell>
                                            <TableCell>{number.FNAME}</TableCell>
                                            <TableCell>{number.LNAME}</TableCell>
                                            <TableCell>{number.PHONE}</TableCell>
                                            <TableCell align="right" style={{display:"flex"}}>
                                                {/* <Fab size="small" color="primary" arial-label="Update" className={classes.updateButton}>
                                                    <CreateIcon />
                                                </Fab> */}
                                                
                                                <Fab size="small" color="secondary" arial-label="Delete" onClick={() => props.delNumber(number.ID)} className={classes.deleteButton}>
                                                    <DeleteIcon />
                                                </Fab>
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