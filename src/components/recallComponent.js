import React from 'react';

//Material-ui Core
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

//Material-ui Icons
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

export default function RecallComponent(props){
    const [open, setOpen] = React.useState(false);

    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }
    return (
        <div>
            <Fab size="small" color="primary" arial-label="recall" onClick = {() => handleOpen()} >
                <PhoneInTalkIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} arial-labelledby="recall-title">
                <DialogTitle id="recall-title">{props.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="subtitle1">
                        {props.subtitle}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick = {props.action}>
                        Call
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}