import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2'
import PictureCard from './cocktail_components/PictureCard';
import useHero from '../hooks/useHero';
import classicCocktailData from './cocktail_components/cocktailList01.json'
import CocktailCard from './cocktail_components/CocktailCard';

const Hero = () => {
  const { mockData, shuffledImages, fadeStates, capitalize } = useHero()
  const testData = [
    { title: 'Margarita', url: '/margarita' },
    { title: 'Negroni', url: '/negroni' },
    { title: 'OF', url: '/old-fashioned' },
    { title: 'Daiquiri', url: '/daiquiri' },
    { title: 'Mojito', url: '/mojito' },
    { title: 'Sour', url: '/whiskey-sour' },
  ];
  
  
  const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    borderRadius: (theme.vars || theme).shape.borderRadius,
    outline: '6px solid',
    outlineColor: 'hsla(220, 25%, 80%, 0.2)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.grey[200],
    // boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'src'})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
      height: 700,
    },
    ...theme.applyStyles('dark', {
      boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
      backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'src'})`,
      outlineColor: 'hsla(220, 20%, 42%, 0.1)',
      borderColor: (theme.vars || theme).palette.grey[700],
    }),
  }));


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

      }}>
        {shuffledImages.map((imgSrc, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              flex: '1 1 25%',
              height: '300px',
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

      {/* Bottom Section with Cards */}
      {/* <Grid container spacing={2} sx={{ mt: 2, p: 1 }}>
        <Grid size={{ xs: 12, sm: 6, md: 12 }} >
          <PictureCard cardData={mockData} classicCocktailData={classicCocktailData} />
        </Grid>
      </Grid> */}
    <CocktailCard cardData={testData} />

    </Box>


  );
};

export default Hero;
