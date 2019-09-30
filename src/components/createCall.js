import React from 'react';

//Material-ui Core
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Material-ui Icons
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';


import useStyles from '../themes/createCallTheme';

export default function CreateCallComponent(props){
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  function handleOpen(){
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }

  function handleCall(){
    handleClose();
    props.handleCreateCall();
  }
  return (
    <div>
      <Fab color="secondary" arial-label="create-call" onClick = {() => handleOpen()} className={classes.button}>
        <PhoneInTalkIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} arial-labelledby="create-call-title">
        <DialogTitle id="create-call-title">Do you really want to create a multiple call?</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            You are creating calls for every number is register for selected form. The system will call
            the numbers, ask the form's question and then submit the answers to the JotForm as an submission.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleCall()}>
            Call
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}