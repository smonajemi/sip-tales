import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';

interface CocktailAIProps {
  message?: string;
}

const CocktailAI: FC<CocktailAIProps> = ({ message }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 'auto', width: '100%' }}>
      <Typography variant="h6">
        {message || 'Cocktail AI is working!'}
      </Typography>
    </Box>
  );
};

export default CocktailAI;
