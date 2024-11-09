import * as React from 'react';
import { AppBar, Box, Button, Container, Divider, Drawer, MenuItem, IconButton } from '@mui/material';
import { Menu as MenuIcon, CloseRounded as CloseRoundedIcon } from '@mui/icons-material';
import logoPic from '../../images/logo-tran.png'
import useNav from '../hooks/useNav';




interface NavBarProps {
  isDevice?: boolean
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}


const NavBar: React.FC<NavBarProps> = ({ isDevice, handleSmoothScroll }) => {
  const { redirectTo, toggleDrawer, Logo, open, setOpen, StyledToolbar } = useNav();
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Logo src={logoPic} onClick={() => redirectTo('/')} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={(e: any) => handleSmoothScroll(e, 'features')}
              >
                Features
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={(e: any) => handleSmoothScroll(e, 'testimonials')}
              >
                Testimonials
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={(e: any) => handleSmoothScroll(e, 'highlights')}
              >
                Highlights
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={(e: any) => handleSmoothScroll(e, 'pricing')}
              >
                Pricing
              </Button>

            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button color="primary" variant="text" size="small"
              onClick={() => redirectTo('/signin')}> Sign in</Button>
            <Button color="primary" variant="contained" size="small"
              onClick={() => redirectTo('/signup')}>Sign up</Button>
            {/* <ColorModeIconDropdown /> */}

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth onClick={() => redirectTo('/signup')}>Sign up</Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth onClick={() => redirectTo('/signin')}>Sign in</Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
