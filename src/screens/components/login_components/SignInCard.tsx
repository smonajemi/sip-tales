import React from 'react';
import {
  Typography,
  Box,
  FormControl,
  FormLabel,
  TextField,
  Link,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import ForgotPassword from './ForgotPassword';
import { CardProps } from '@mui/material/Card';

interface SignInCardProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClickOpen: () => void;
  handleClose: () => void;
  validateInputs: () => void;
  open: boolean;
  emailError: boolean;
  emailErrorMessage: string;
  passwordError: boolean;
  passwordErrorMessage: string;
  CustomCard: React.ComponentType<CardProps>;
}

const SignInCard: React.FC<SignInCardProps> = ({
  handleSubmit,
  handleClickOpen,
  handleClose,
  validateInputs,
  open,
  emailError,
  emailErrorMessage,
  passwordError,
  passwordErrorMessage,
  CustomCard
}) => {
  return (
    <CustomCard variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
        }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
            inputProps={{ 'aria-label': 'email' }}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              Forgot your password?
            </Link>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={validateInputs}
        >
          Sign in
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <span>
            <Link href="/signup" variant="body2" sx={{ alignSelf: 'center' }}>
              Sign up
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
      </Box>
    </CustomCard>
  );
};

export default SignInCard;
