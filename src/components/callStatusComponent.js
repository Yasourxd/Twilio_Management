import React from 'react';
import useStyles from '../themes/callStatusTheme';
import clsx from 'clsx';

//Material-ui Core
import Box from '@material-ui/core/Box';

export default function CallStatusComponent(props){
    const classes = useStyles();
    return (
        <Box component="label" 
        className={clsx(classes.callBase, 
        {
            [classes.yellowCase]: props.status == "In progress",
            [classes.redCase]: props.status == "Failed",
            [classes.greenCase]: props.status == "Success"
        })}>
            <label>{props.status ? props.status : "status"}</label>
        </Box>
    )
}