import React from 'react';

//Material-ui Core
import MenuItem from '@material-ui/core/MenuItem';

export default function MyMenuItem(props){
    return (
        <MenuItem onClick={() => window.open(`https://www.jotform.com/inbox/${props.formNumber}/${props.subID}`, '_blank')}>
        {props.title}
        </MenuItem>
    )
}