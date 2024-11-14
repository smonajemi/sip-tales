// CustomModal.tsx
import React from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import {Close as CloseIcon } from '@mui/icons-material';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, title, content, actions }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box mb={2}>{content}</Box>
     
      </Box>
    </Modal>
  );
};

export default CustomModal;
