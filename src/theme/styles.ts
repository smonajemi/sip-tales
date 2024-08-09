import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#300145', // Deep Purple
    //   contrastText: '#bca52b', // Light Gold (for contrast)
    // },
    // secondary: {
    //   main: '#8f7507', // Gold Yellow
    //   contrastText: '#5a2d7a', // Lavender (for contrast)
    // },
    // background: {
    //   default: '#f3e5f5', // Much lighter purple
    //   paper: '#9c7a1c', // Soft Brown for paper elements
    // },
    // text: {
    //   primary: '#543348', // Dusty Rose
    //   secondary: '#7a4a64', // Rose Pink (for secondary text)
    // },
    // warning: {
    //   main: '#e0d49a', // Existing warning color
    //   contrastText: '#4d006a', // Plum (for contrast on warning elements)
    // },
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
