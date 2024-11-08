import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Activate dark mode
    background: {
      default: '#121212', 
    },
    primary: {
      light: '#C68642', 
      main: '#C68642',   
      dark: '#8F5028',
    },
    error: {
      main: '#330049', 
    },
    success: {
      main: '#8f7507', 
    },
    info: {
      main: '#5a2d7a',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      color: 'yellow', 
    },
    h2: {
      color: 'red', 
    },
    // body1: {
    //   color: '#D87A3D', 
    // },
    body2: {
      color: "#9E5B40"
    },
    h6: {
      color: "#D87A3D"
    }


  },
});

export default theme;
