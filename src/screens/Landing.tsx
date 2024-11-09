import React from 'react';
import NavBar from './components/NavBar';
import { Container, CssBaseline, PaletteMode } from '@mui/material';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AppTheme from '../theme/AppTheme';
import { useResponsiveness } from '../components/hooks/useResponsiveness';
import CocktailContent from './components/cocktail_components/CocktailContent';
import useSmoothScroll from '../components/hooks/useSmoothScroll';

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
  ...props
}) => {
  const { isDevice } = useResponsiveness();
  const {handleSmoothScroll} = useSmoothScroll();
  
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavBar isDevice={isDevice} handleSmoothScroll={handleSmoothScroll} />
      <Hero />
      <Container   
      maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <CocktailContent />
        <Features />
        <Testimonials />
        <Highlights />
        <Pricing />
        {/* <CocktailBlog /> */}
        <Footer handleSmoothScroll={handleSmoothScroll} />
      </Container>
    </AppTheme>
  );
};

export default LandingPage;
