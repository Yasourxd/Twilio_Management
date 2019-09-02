import React from 'react';

//Material-ui Core
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';


//Material-ui Icons
import AddIcon from '@material-ui/icons/Add';

import useStyles from '../themes/addnumberTheme';

export default function AddnumberDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [FNAME, setFNAME] = React.useState('');
  const [LNAME, setLNAME] = React.useState('');
  const [PHONE, setPHONE] = React.useState('+90');
  const classes = useStyles();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleInputFNAME(e){
      setFNAME(e.target.value);
  }
  function handleInputLNAME(e){
      setLNAME(e.target.value);
  }
  function handleInputPHONE(e){
      setPHONE(e.target.value);
  }
  
  function handleSubmit(ID){
    props.onSubmit(ID, FNAME, LNAME, PHONE);
    handleClose();
  }

  return (
    <div>
        <Fab color="primary" aria-label="add" className={classes.button} onClick={handleClickOpen}>
            <AddIcon />
        </Fab>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Phone Number</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add phone number to your contact list to use in your forms.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="FNAME"
            label="First Name"
            type="text"
            fullWidth
            value={FNAME}
            onChange={handleInputFNAME}
          />
          <TextField
            autoFocus
            margin="dense"
            id="LNAME"
            label="Last Name"
            type="text"
            fullWidth
            value={LNAME}
            onChange={handleInputLNAME}
          />
          <TextField
            autoFocus
            margin="dense"
            id="PHONE"
            label="Phone Number"
            type="text"
            fullWidth
            value={PHONE}
            onChange={handleInputPHONE}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit(5)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
