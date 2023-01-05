import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { errorActions } from '../../store/errorSlice';

export default function AlertDialog() {
const errorMessage = useSelector(state => state.error.errorMessage)
const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(errorActions.setError(null))
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={!!errorMessage}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Alert !!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}