import React from 'react';

//Material-ui Core
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
    function handleDell(){
        setOpen(false);
        props.action(props.ID);
    }

    return(
        <div>
            {/* <Fab size="small" color="secondary" arial-label="remove-number" onClick={() => handleOpen()}> */}
            <IconButton arial-label = "delete" onClick={() => handleOpen()}>
                <DeleteIcon />
            </IconButton>
            {/* </Fab> */}
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
                    <Button color="primary" onClick={() => handleDell()}>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}