import React from 'react';

//Material-ui Core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';


//Material-ui Icons
import AddIcon from '@material-ui/icons/Add';

import useStyles from '../themes/addFormNumberTheme';
import { Typography } from '@material-ui/core';

export default function AddFormnNumberDialog(props) {
  const [open, setOpen] = React.useState(false);
  var [selectedCount, setSelectedCount] = React.useState(0);
  var [numSelected, setNumSelected] = React.useState(Array(20).fill(false));
  var [checkedAll, setCheckedAll] = React.useState(false);
  const classes = useStyles();

  function handleClickOpen() {
    props.handleNotAdded();
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChecked(count){
    console.log(props.notAddedNumbers);
    if(numSelected[count]){
      setSelectedCount(selectedCount - 1);
      numSelected[count] = false;
      console.log(numSelected);
    }else{
      setSelectedCount(selectedCount + 1);
      numSelected[count] = true;
      console.log(numSelected);
    }
  }
  function handleCheckedAll(){
    if(checkedAll){
      setSelectedCount(0)
      setNumSelected(Array(props.notAddedNumbers.length).fill(false));
      setCheckedAll(false);
      console.log(props.notAddedNumbers)
      console.log(Array(props.notAddedNumbers.length).fill(false));
    }else{
      setSelectedCount(props.notAddedNumbers.length)
      setNumSelected(Array(props.notAddedNumbers.length).fill(true));
      setCheckedAll(true);
      console.log(Array(props.notAddedNumbers.length).fill(true));
    }
  }
  function handleAddButton(){
    props.handleAddFormNumber(props.notAddedNumbers, numSelected, props.selectedForm)
    handleClose();
    setSelectedCount(0)
    setNumSelected(Array(props.notAddedNumbers.length).fill(false));
  }
  

  return (
    <div>
        <Fab color="primary" aria-label="add" className={classes.button} onClick={handleClickOpen}>
            <AddIcon />
        </Fab>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title">Add Number to the Form</DialogTitle>
        <DialogContent>
        <Typography variant="subtitle1" style={{color:"red"}}>{selectedCount} number selected</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={handleCheckedAll}
                  />
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(props.notAddedNumbers ? props.notAddedNumbers : props.numbers).map((number, count = 0) => {
                return (
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked = {numSelected[count]}
                        onChange={() => handleChecked(count - 1)}
                      />
                    </TableCell>
                    <TableCell>{++count}</TableCell>
                    <TableCell>{number.FNAME}</TableCell>
                    <TableCell>{number.LNAME}</TableCell>
                    <TableCell>{number.PHONE}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => handleAddButton()}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
