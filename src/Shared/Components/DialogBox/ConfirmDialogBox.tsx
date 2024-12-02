import React, { FC } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import { useAuthentication } from '../../../Shared';

interface ConfirmationBoxProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmationBox: FC<ConfirmationBoxProps> = ({ open, setOpen }) => {
  const { logout } = useAuthentication();

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Logout</DialogTitle>
      <DialogContent>Are you sure you want to logout?</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleLogout} color="primary">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationBox;
