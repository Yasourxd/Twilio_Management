import React from 'react';

//Material-ui Core
import Typography from '@material-ui/core/Typography';

export default function EmptyViewComponent(props){
    return (
        <div style={{minHeight:"60px", border:"2px double rgb(194, 70, 120, 0.9)",margin:"10px auto 0px auto",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center", fontSize:"1.5rem"}}>
            <Typography variant="body1" color="inherit">{props.emptyText ? props.emptyText : "No Data"}</Typography>
        </div>
    )
}