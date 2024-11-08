import * as React from 'react';
import { alpha } from '@mui/material';
import { AppBar, Box, Button, Container, Divider, Drawer, MenuItem, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon, CloseRounded as CloseRoundedIcon } from '@mui/icons-material';
import ColorModeIconDropdown from './ColorModeIconDropdown';
import { AnyPtrRecord } from 'dns';
import logoPic from '../../images/logo-tran.png'
import useNav from '../hooks/useNav';



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${(theme.vars.palette.background as any).defaultChannel}/ 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

interface NavBarProps {
  isDevice: boolean
}



const NavBar: React.FC<NavBarProps> = ({isDevice}) => {
  const { redirectTo } = useNav();
  const [open, setOpen] = React.useState(false);
  const Logo = styled('img')({
    width: isDevice ? '14vw' : '5vw',
    height: 'auto',
    cursor: 'pointer',
  });
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

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
            <Logo src={logoPic} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small">Features</Button>
              <Button variant="text" color="info" size="small">Testimonials</Button>
              <Button variant="text" color="info" size="small">Highlights</Button>
              <Button variant="text" color="info" size="small">Pricing</Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button color="primary" variant="text" size="small" 
            onClick={() => redirectTo('/signin')}> Sign in</Button>
            <Button color="primary" variant="contained" size="small" onClick={() => redirectTo('/signup')}>Sign up</Button>
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
                  <Button color="primary" variant="contained" fullWidth>Sign up</Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>Sign in</Button>
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
