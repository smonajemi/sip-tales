import React, { useState, useEffect } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CustomLoaderProps {
  message?: string; 
  height?: string | number;
  showProgress?: boolean; // New prop to enable the progress label
}

const CustomLoader: React.FC<CustomLoaderProps> = ({
  message,
  height = "100vh",
  showProgress = false,
}) => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (showProgress) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 800);
      return () => clearInterval(timer);
    }
  }, [showProgress]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={height}
    >
      {showProgress ? (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={progress}  />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
      {message && (
        <Typography variant="caption" style={{ marginTop: 15 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default CustomLoader;
