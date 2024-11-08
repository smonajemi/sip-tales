import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Activate dark mode
    background: {
      default: '#121212', // Customize the background color for dark mode
    },
    primary: {
      light: '#C68642',  // Set #C68642 as the primary light color
      main: '#C68642',   // Optionally, set it as the main color too, if you want it across all components
      dark: '#8F5028',
    },
    error: {
      main: '#330049', // Dark Magenta (for error states)
    },
    success: {
      main: '#8f7507', // Reusing Gold Yellow for success
    },
    info: {
      main: '#5a2d7a', // Lavender (for informational elements)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
