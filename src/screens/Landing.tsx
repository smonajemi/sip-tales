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
// import ToggleCustomTheme from './components/ToggleCustomTheme';

interface LandingPageProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
  toggleCustomTheme: () => void;
  showCustomTheme: boolean;
}

const LandingPage = ({
  mode,
  toggleColorMode,
  toggleCustomTheme,
  showCustomTheme,
}: LandingPageProps) => (
  <AppTheme>
    <CssBaseline enableColorScheme />
    <NavBar  />
    <Hero />
  <div>
  <Features />
    <Testimonials />
    <Highlights />
    <Pricing />
    <Footer />
  </div>
  </AppTheme>
);

export default LandingPage;
