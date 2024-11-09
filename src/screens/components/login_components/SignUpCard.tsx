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
import { CardProps } from '@mui/material/Card';


interface SignUpCardProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  validateInputs: () => void;
  nameError: boolean;
  nameErrorMessage: string;
  emailError: boolean;
  emailErrorMessage: string;
  passwordError: boolean;
  passwordErrorMessage: string;
  CustomCard: React.ComponentType<CardProps>;
}


const SignUpCard: React.FC<SignUpCardProps> = ({
  handleSubmit,
  validateInputs,
  nameError,
  nameErrorMessage,
  emailError,
  emailErrorMessage,
  passwordError,
  passwordErrorMessage,
  CustomCard,
}) => {
  return (
    <CustomCard variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name">Full name</FormLabel>
          <TextField
            autoComplete="name"
            name="name"
            required
            fullWidth
            id="name"
            placeholder="Jon Snow"
            error={nameError}
            helperText={nameErrorMessage}
            color={nameError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            required
            fullWidth
            id="email"
            placeholder="your@email.com"
            name="email"
            autoComplete="email"
            variant="outlined"
            error={emailError}
            helperText={emailErrorMessage}
            color={emailError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            required
            fullWidth
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="new-password"
            variant="outlined"
            error={passwordError}
            helperText={passwordErrorMessage}
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I want to receive updates via email."
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={validateInputs}
        >
          Sign up
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <span>
            <Link href="/signin" variant="body2" sx={{ alignSelf: 'center' }}>
              Sign in
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>
        <Typography sx={{ color: 'text.secondary' }}>or</Typography>
      </Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign up with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign up with Google
        </Button>
      </Box>
    </CustomCard>
  );
};

export default SignUpCard;
