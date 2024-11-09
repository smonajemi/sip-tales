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
  const buttonItems = [
    'Features', 'Testimonials', 'Highlights', 'Pricing', 'FAQ', 'Blog'
  ];
  const menuItems = [
    'Home'
  ];
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

              {buttonItems.map((item, index) => (
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  key={index}
                  onClick={(e: any) => handleSmoothScroll(e, item?.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button color="primary" variant="text" size="small"
              onClick={() => redirectTo('/signin')}> Sign in</Button>
            <Button color="primary" variant="contained" size="small"
              onClick={() => redirectTo('/signup')}>Sign up</Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
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
                {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={(e: any) => redirectTo('/')}>
                    {item}
                  </MenuItem>
                ))}
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
