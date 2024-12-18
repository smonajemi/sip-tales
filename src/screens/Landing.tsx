import React, { useEffect, lazy } from 'react';
import NavBar from './components/NavBar';
import { Container, CssBaseline, PaletteMode } from '@mui/material';
import Hero from './components/Hero';
import AppTheme from '../theme/AppTheme';
import { useResponsiveness } from '../components/hooks/useResponsiveness';
import {
  SearchRounded as SearchRoundedIcon,
  HistoryEduRounded as HistoryEduRoundedIcon,
  LocalBarRounded as LocalBarRoundedIcon,
  SettingsSuggestRounded as SettingsSuggestRoundedIcon,
  SupportAgentRounded as SupportAgentRoundedIcon,
  PrecisionManufacturingRounded as PrecisionManufacturingRoundedIcon,
} from '@mui/icons-material';

import CustomLoader from '../components/CustomLoader';
import useAuth from '../components/hooks/useAuth';
import { useLoading } from '../components/LoadingProvider';

interface LandingPageProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
  toggleCustomTheme: () => void;
  showCustomTheme: boolean;
}

const CocktailContent = lazy(() => import('./components/cocktail_components/CocktailContent'));
const Features = lazy(() => import('./components/Features'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Highlights = lazy(() => import('./components/Highlights'));
const Pricing = lazy(() => import('./components/Pricing'));
const Footer = lazy(() => import('./components/Footer'));

const LandingPage: React.FC<LandingPageProps> = ({
  mode,
  toggleColorMode,
  toggleCustomTheme,
  showCustomTheme,
  ...props
}) => {
  const { isDevice, handleSmoothScroll } = useResponsiveness();
  const { isLoggedIn } = useAuth();
  const { loading, setLoading } = useLoading(); // Access loading context

  const listItems = [
    {
      icon: <SearchRoundedIcon fontSize="large" color="primary" />,
      title: 'Explore Recipes',
      description: 'Discover unique cocktails and classic drinks to suit every taste. Search by ingredient, flavor, or style to find your next favorite.',
    },
    {
      icon: <HistoryEduRoundedIcon fontSize="large" color="primary" />,
      title: 'Learn the History',
      description: 'Each cocktail comes with a story. Read about the origins and historical journey of each drink, adding a richer taste to every sip.',
    },
    {
      icon: <LocalBarRoundedIcon fontSize="large" color="primary" />,
      title: 'Bartender Expertise',
      description: 'Get tips from real bartenders. Our recipes include authentic techniques and measurements to help you mix drinks like a pro.',
    },
    {
      icon: <SettingsSuggestRoundedIcon fontSize="large" color="primary" />,
      title: 'Adaptable Experience',
      description: 'Whether you’re new or a seasoned enthusiast, *Sip&Tales* adapts to your level, making cocktail crafting easy and enjoyable.',
    },
    {
      icon: <SupportAgentRoundedIcon fontSize="large" color="primary" />,
      title: 'Reliable Support',
      description: 'Our support team is here to help you with any questions, whether about cocktails, mixology techniques, or app functionality.',
    },
    {
      icon: <PrecisionManufacturingRoundedIcon fontSize="large" color="primary" />,
      title: 'Precision in Every Detail',
      description: 'Each recipe is crafted with precision, ensuring that every measure, mix, and garnish is just right for a perfect drink every time.',
    },
  ];

  useEffect(() => {
    // Manage global loading state while lazy components are resolving
    setLoading(true);
    const lazyLoadTimer = setTimeout(() => setLoading(false), 500); // Simulate loading time
    return () => clearTimeout(lazyLoadTimer);
  }, [setLoading]);

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavBar isDevice={isDevice} handleSmoothScroll={handleSmoothScroll} />
      <Hero />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4 }}
      >
        <CocktailContent isLoggedIn={true} />
        {/* <Features /> */}
        {/* <Testimonials /> */}
        {/* <Highlights isDevice={isDevice} listItems={listItems} /> */}
        {/* <Pricing /> */}
        {/* <CocktailBlog /> */}
        <Footer handleSmoothScroll={handleSmoothScroll} />
      </Container>
    </AppTheme>
  );
};

export default LandingPage;
