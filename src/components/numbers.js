import React from 'react';

import useStyles from '../themes/numberTheme';

//Material-ui Core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody';

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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {console.log(props.numbers)}
                                {props.numbers.map((number) => {
                                    return(
                                        <TableRow>
                                            <TableCell>{number.ID}</TableCell>
                                            <TableCell>{number.FNAME}</TableCell>
                                            <TableCell>{number.LNAME}</TableCell>
                                            <TableCell>{number.PHONE}</TableCell>
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