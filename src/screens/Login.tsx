import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../theme/AppTheme';
import NavBar from './components/NavBar';
import SignInCard from './components/login_components/SignInCard';
import SignUpCard from './components/login_components/SignUpCard';
import useLogin from './components/login_components/hooks/useLogin';
import useSmoothScroll from '../components/hooks/useSmoothScroll';



const Login = (props: { disableCustomTheme?: boolean }) => {
 const {
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
} = useLogin()

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavBar isDevice={isDevice} handleSmoothScroll={handleSmoothScroll} isLogin={true}/>
      <CustomContainer direction="column" justifyContent="space-between">
        {isSignIn && (  
          <SignInCard
        handleSubmit={handleSubmit}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        validateInputs={validateInputs}
        open={open}
        emailError={emailError}
        emailErrorMessage={emailErrorMessage}
        passwordError={passwordError}
        passwordErrorMessage={passwordErrorMessage}
        CustomCard={CustomCard}
      />)}
        {isSignUp && ( 
        <SignUpCard
        handleSubmit={handleSubmit}
        validateInputs={validateInputs}
        nameError={nameError}
        nameErrorMessage={nameErrorMessage}
        emailError={emailError}
        emailErrorMessage={emailErrorMessage}
        passwordError={passwordError}
        passwordErrorMessage={passwordErrorMessage}
        CustomCard={CustomCard}
      
      />)}
      </CustomContainer>
    </AppTheme>
  );
};

export default Login;
