import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2'
import useHero from '../hooks/useHero';

import CocktailCard from './cocktail_components/CocktailCard';
import { useResponsiveness } from '../../components/hooks/useResponsiveness';
import PictureCard from './cocktail_components/PictureCard';
import classicCocktailData from '../components/cocktail_components/cocktailData/cocktailList01.json'
const Hero = () => {
  const { mockData, shuffledImages, fadeStates, testData } = useHero()
  const {isDevice} = useResponsiveness()

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', marginTop: 15 }}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden', // Ensures content respects borderRadius
        borderRadius: '15px', // Rounds the entire container
        width: '100%', // Optional: adjust to fit your layout needs
        maxWidth: '1200px', // Optional: set a max-width if needed
        margin: '0 auto', // Optional: centers the container
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',

      }}>
        {shuffledImages.map((imgSrc, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              flex: '1 1 25%',
              height: isDevice ? '10vh' : '15vh',
              overflow: 'hidden',
              opacity: fadeStates[index] ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <Box
              component="img"
              src={imgSrc}
              alt={`Hero Image ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust opacity as needed
              }}
            />
          </Box>
        ))}
      </Box>
      {/* <Grid container spacing={2} sx={{ mt: 2, p: 1 }}>
        <Grid size={{ xs: 12, sm: 6, md: 12 }} >
          <PictureCard cardData={mockData} classicModalData={classicCocktailData} />
        </Grid>
      </Grid> */}
    <CocktailCard cardData={testData} />

    </Box>


  );
};

export default Hero;
