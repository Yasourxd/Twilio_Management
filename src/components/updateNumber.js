import React from 'react';

//Material-ui Core
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';


//Material-ui Icons
import CreateIcon from '@material-ui/icons/Create';

import useStyles from '../themes/addnumberTheme';

export default function UpdatenumberDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [PHONEID, setPHONEID] = React.useState(props.PHONEID);
  const [FNAME, setFNAME] = React.useState(props.FNAME);
  const [LNAME, setLNAME] = React.useState(props.LNAME);
  const [PHONE, setPHONE] = React.useState(props.PHONE);
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
  
  function handleSubmit(){
    props.updateNumber(props.PHONEID, FNAME, LNAME, PHONE);
    handleClose();
  }

  return (
    <div>
        {/* <Fab color="primary" aria-label="add" onClick={handleClickOpen} size="small"> */}
        <IconButton arial-label="Update" onClick={handleClickOpen}>
          <CreateIcon />
        </IconButton>
        {/* </Fab> */}
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Phone Number</DialogTitle>
        <DialogContent>
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
          <Button onClick={() => handleClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
