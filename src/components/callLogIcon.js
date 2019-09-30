import React from 'react';

//Material-ui Icons
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

export default function CallLogIcon(props){
    return (
        <div className="callLogIcon" 
        className={clsx("callLogIcon",{
            ["callLogIconGreen"]: props.status == "Success",
            ["callLogIconRed"]: props.status != "Success"
        })}>
            {props.status == "Success" ? <DoneIcon /> : <CloseIcon />}
        </div>
    )
}