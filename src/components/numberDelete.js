import React from 'react';

//Material-ui Core
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//Material-ui Icons
import DeleteIcon from '@material-ui/icons/Delete';


export default function DeleteNumber(props){
    const [open, setOpen] = React.useState(false);

    function handleOpen(){
        setOpen(true);
    }
    
    function handleClose(){
        setOpen(false);
    }

    return(
        <div style={{marginLeft:"10px"}}>
            <Fab size="small" color="secondary" arial-label="remove-number" onClick={() => handleOpen()}>
                <DeleteIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} arial-labelledby="delete-number">
                <DialogTitle id="delete-number">{props.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="subtitle1">
                        {props.subtitle}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={() => props.action(props.ID)}>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}