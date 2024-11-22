import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';

interface DummyComponentProps {
  message?: string;
}

const DummyComponent: FC<DummyComponentProps> = ({ message }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 'auto', width: '100%' }}>
      <Typography variant="h6">
        {message || 'DummyComponent is working!'}
      </Typography>
    </Box>
  );
};

export default DummyComponent;
