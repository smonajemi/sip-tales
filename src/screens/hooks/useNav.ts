import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsiveness } from '../../components/hooks/useResponsiveness';
import { styled } from '@mui/material/styles';
import { alpha, Toolbar } from '@mui/material';



const useNav = () => {
  const navigate = useNavigate();
  const { isDevice } = useResponsiveness();
  const [open, setOpen] = useState(false);

  const Logo = styled('img')({
    width: isDevice ? '14vw' : '5vw',
    height: 'auto',
    cursor: 'pointer',
  });

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const redirectTo = (path: string) => {
    navigate(path);
  };

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



  
  return {
    redirectTo,
    open,
    setOpen,
    isDevice,
    toggleDrawer,
    Logo,
    StyledToolbar,
 
  } as const;
};

export default useNav;
