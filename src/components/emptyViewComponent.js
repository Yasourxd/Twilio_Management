import React from 'react';

//Material-ui Core
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

//Material-ui Icons
import PhoneIcon from '@material-ui/icons/Phone';

export default function EmptyViewComponent(props){
    return (
        <div className="emptyView">
            <IconButton>
                <PhoneIcon />
            </IconButton>
            <Typography variant="body1" color="inherit">{props.emptyText ? props.emptyText : "No Data"}</Typography>
        </div>
    )
}