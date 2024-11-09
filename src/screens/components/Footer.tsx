import * as React from 'react';
import { Twitter as TwitterIcon, LinkedIn as LinkedInIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { Typography, Container, Box, InputLabel, Stack, TextField, Button, IconButton, Link, styled } from '@mui/material';
import logoPic from '../../images/logo-tran.png';

const Logo = styled('img')({
  width: '50px',
  height: 'auto',
  cursor: 'pointer',
});

interface FooterProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}


const Copyright = () => (
  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
    {'Copyright © '}
    <Link href="/">Sip&Tales</Link>
    &nbsp;
    {new Date().getFullYear()}
  </Typography>
);

const Footer: React.FC<FooterProps> = ({ handleSmoothScroll }) => {
  return ( 
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 4, sm: 8 },
      py: { xs: 8, sm: 10 },
      textAlign: { sm: 'center', md: 'left' },
    }}
  > 
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
            Join the newsletter
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Subscribe for weekly updates. No spams ever!
          </Typography>
          <InputLabel htmlFor="email-newsletter">Email</InputLabel>
          <Stack direction="row" spacing={1} useFlexGap>
            <TextField
              id="email-newsletter"
              hiddenLabel
              size="small"
              variant="outlined"
              fullWidth
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
              }}
              sx={{ width: '250px' }}
            />
            <Button variant="contained" color="primary" size="small" sx={{ flexShrink: 0 }}>
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Product
        </Typography>
        <Link color="text.secondary" variant="body2" href="#features" onClick={(e) => handleSmoothScroll(e, 'features')}>
          Features
        </Link>
        <Link color="text.secondary" variant="body2" href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')}>
          Testimonials
        </Link>
        <Link color="text.secondary" variant="body2" href="#highlights" onClick={(e) => handleSmoothScroll(e, 'highlights')}>
          Highlights
        </Link>
        <Link color="text.secondary" variant="body2" href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
          Pricing
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Link variant="body2" sx={{ fontWeight: 'medium' }}>
          Company
        </Link>
        <Link color="text.secondary" variant="body2" href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
          About us
        </Link>
        <Link color="text.secondary" variant="body2" href="/careers">
          Careers
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Jobs
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Legal
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Terms
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Privacy
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Contact
        </Link>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: { xs: 4, sm: 8 },
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <div>
        <Link color="text.secondary" variant="body2" href="#">
          Privacy Policy
        </Link>
        <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Terms of Service
        </Link>
        <Copyright />
      </div>
      <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'left', color: 'text.secondary' }}>
        <IconButton color="inherit" size="small" href="https://github.com/mui" aria-label="GitHub" sx={{ alignSelf: 'center' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" size="small" href="https://x.com/MaterialUI" aria-label="X" sx={{ alignSelf: 'center' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" size="small" href="https://www.linkedin.com/company/mui/" aria-label="LinkedIn" sx={{ alignSelf: 'center' }}>
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  </Container>
  );
};

export default Footer;
