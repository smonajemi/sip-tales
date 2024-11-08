import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import NavBar from './components/NavBar';
import MainContainer from '../components/MainContainer';
import { CssBaseline, PaletteMode } from '@mui/material';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AppTheme from '../theme/AppTheme';
import { useResponsiveness } from '../components/hooks/useResponsiveness';

interface LandingPageProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
  toggleCustomTheme: () => void;
  showCustomTheme: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({
  mode,
  toggleColorMode,
  toggleCustomTheme,
  showCustomTheme,
}) => {
  const { isDevice } = useResponsiveness();

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <NavBar isDevice={isDevice} />
      <Hero />
      <Box>
        <Features />
        <Testimonials />
        <Highlights />
        <Pricing />
        <Footer />
      </Box>
    </AppTheme>
  );
};

export default LandingPage;
