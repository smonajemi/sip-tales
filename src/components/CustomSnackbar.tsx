// CustomSnackbar.tsx
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AlertProps } from '@mui/material';

interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  autoHideDuration?: number;
  message: string;
  severity?: AlertProps['severity'];
  variant?: AlertProps['variant'];
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  onClose,
  autoHideDuration = 6000,
  message,
  severity = 'success',
  variant = 'filled',
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant={variant}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
