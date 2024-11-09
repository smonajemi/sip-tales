import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { useResponsiveness } from '../../../../components/hooks/useResponsiveness';


interface ErrorMessages { }

const useLogin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const { isDevice, handleSmoothScroll } = useResponsiveness();
  const isSignIn = window.location.href.includes('signin');
  const isSignUp = window.location.href.includes('signup');
 
  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError || nameError) {
      event.preventDefault();
      return;
    }

    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const CustomCard = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    overflow: isDevice ? 'auto' : 'none',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
      marginTop: '15vh',
    },
    [theme.breakpoints.down('md')]: { // Specific adjustments for medium screens and below
      height: '90vh', // Constrain height on smaller/landscape screens
      marginTop: '15vh',
    },
    '@media (orientation: landscape)': {
      height: isDevice ? '80vh' : 'auto',  // Limits height to 80% of viewport in landscape
      marginTop: isDevice ? '25vh' : '15vh',    // Removes top margin to maximize vertical space
      padding: theme.spacing(2), // Adjust padding for landscape
    },
    boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
      boxShadow:
        'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
  }));
  const CustomContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
        backgroundImage:'radial-gradient(ellipse 80% 50% at 50% -10%, hsl(210, 100%, 16%), transparent)',
        borderRadius: '15px'
      }),
    },
  }));

  return {
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    nameError,
    nameErrorMessage,
    open,
    isDevice,
    handleClickOpen,
    handleClose,
    handleSubmit,
    validateInputs,
    isSignIn,
    isSignUp,
    CustomCard,
    CustomContainer,
    handleSmoothScroll
  };
};

export default useLogin;
