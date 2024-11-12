import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import debounce from 'lodash.debounce';
import { useCocktailApi } from '../hooks/useCocktailApi';
import { Cocktail } from '../../types/cocktail.types';
import heroImage from '../../images/bar01.jpg';
import heroImage01 from '../../images/bar06.jpg';
import heroImage02 from '../../images/bar12.jpg';
import heroImage03 from '../../images/bar09.jpg';

import img01 from '../../images/bar17.jpg'
import img02 from '../../images/bar07.jpg'

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { useCallback } from 'react';
import CustomLoader from '../../components/CustomLoader';
import CustomSlider from '../../components/CustomSlider';
import Grid from '@mui/material/Grid2'
import { Card, CardContent } from '@mui/material';
import cocktailList from './cocktail_components/cocktailList01.json';

const Hero = () => {
  const { fetchCocktailByName } = useCocktailApi();
  const [cocktail, setCocktail] = React.useState<Cocktail | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [cocktailName, setCocktailName] = React.useState<string>('');
  const [hasFetched, setHasFetched] = React.useState<boolean>(false);
  const theme = useTheme();

  const capitalize = (text: string | undefined): string => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
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

  // const mockData = {
  //   id: "1",
  //   image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-msR4MdLycHszdmYezYW3USrC/user-xbXsdo3jJ88p2AxkanF1eqy1/img-pTPkJQ6FuSmWF1WkiOTkf6Mj.png?st=2024-11-12T02%3A09%3A02Z&se=2024-11-12T04%3A09%3A02Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-12T00%3A32%3A21Z&ske=2024-11-13T00%3A32%3A21Z&sks=b&skv=2024-08-04&sig=kyZUHwUUNrKx5mVY3y9v/Kb0r96BO7kXcJErNXEyRB4%3D',
  //   description: "The Negroni is a bittersweet cocktail with a perfect balance of gin, vermouth, and Campari.",
  //   recipe: [
  //     { ingredient: "Gin", amount: "2oz" },
  //     { ingredient: "Sweet Vermouth", amount: "1oz" },
  //     { ingredient: "Campari", amount: "1oz" },
  //     { ingredient: "Orange Twist for garnish", amount: "as needed" },
  //   ],
  //   similar_drinks: [
  //     {
  //       drink: "Boulevardier",
  //       description: "A Negroni variation with whiskey instead of gin, offering a richer and smoother flavor profile."
  //     },
  //     {
  //       drink: "Americano",
  //       description: "A lighter and more refreshing version of the Negroni, replacing gin with soda water."
  //     },
  //     {
  //       drink: "Negroni Sbagliato",
  //       description: "A bubbly twist on the classic Negroni, using sparkling wine instead of gin for a festive touch."
  //     }
  //   ],
  //   name: "Negroni",
  //   ingredients: ["Gin", "Sweet Vermouth", "Campari", "Orange Twist for garnish"]
  // };

  // const mockData = 
 
  const mockData = [
    {
      id: "1",
      name: "Negroni",
      tag: "stirred",
      image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-msR4MdLycHszdmYezYW3USrC/user-xbXsdo3jJ88p2AxkanF1eqy1/img-pTPkJQ6FuSmWF1WkiOTkf6Mj.png?st=2024-11-12T02%3A09%3A02Z&se=2024-11-12T04%3A09%3A02Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-12T00%3A32%3A21Z&ske=2024-11-13T00%3A32%3A21Z&sks=b&skv=2024-08-04&sig=kyZUHwUUNrKx5mVY3y9v/Kb0r96BO7kXcJErNXEyRB4%3D',
      description: "The Negroni is a bittersweet cocktail with a perfect balance of gin, vermouth, and Campari.",
      recipe: [
        { ingredient: "Gin", amount: "2oz" },
        { ingredient: "Sweet Vermouth", amount: "1oz" },
        { ingredient: "Campari", amount: "1oz" },
        { ingredient: "Orange Twist for garnish", amount: "as needed" }
      ],
      similar_drinks: [
        {
          drink: "Boulevardier",
          description: "A Negroni variation with whiskey instead of gin, offering a richer and smoother flavor profile."
        },
        {
          drink: "Americano",
          description: "A lighter and more refreshing version of the Negroni, replacing gin with soda water."
        },
        {
          drink: "Negroni Sbagliato",
          description: "A bubbly twist on the classic Negroni, using sparkling wine instead of gin for a festive touch."
        }
      ],
      ingredients: ["Gin", "Sweet Vermouth", "Campari", "Orange Twist for garnish"]
    },
    {
      id: "2",
      name: "Margarita",
      tag: "shaken",
      image: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-msR4MdLycHszdmYezYW3USrC/user-xbXsdo3jJ88p2AxkanF1eqy1/img-2rF6C4jxF8Z8p1Ot5kdRnSKp.png?st=2024-11-12T02%3A09%3A02Z&se=2024-11-12T04%3A09%3A02Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-12T00%3A32%3A21Z&ske=2024-11-13T00%3A32%3A21Z&sks=b&skv=2024-08-04&sig=rTzHrSff2UzLClLb1xXMTnXHwXcFg7BdLVxKFQQG7Nk%3D',
      description: "The Margarita is a refreshing, tangy cocktail that combines tequila, lime juice, and orange liqueur for a perfect balance of flavors.",
      recipe: [
        { ingredient: "Tequila", amount: "2oz" },
        { ingredient: "Lime Juice", amount: "1oz" },
        { ingredient: "Rich Syrup", amount: "0.25oz" },
        { ingredient: "Triple Sec", amount: "0.75oz" },
        { ingredient: "Salt for rim", amount: "as needed" }
      ],
      similar_drinks: [
        {
          drink: "Daiquiri",
          description: "A rum-based cousin of the Margarita, equally refreshing but with a slightly sweeter taste."
        },
        {
          drink: "Paloma",
          description: "A Mexican favorite, similar to the Margarita but featuring grapefruit soda instead of lime and orange liqueur."
        },
        {
          drink: "Tommy's Margarita",
          description: "A simplified version of the Margarita, using agave syrup instead of orange liqueur for a more natural sweetness."
        }
      ],
      ingredients: ["Tequila", "Lime Juice", "Rich Syrup", "Triple Sec", "Salt for rim"]
    }
  ];
  
  const fetchCocktailData = useCallback(
    debounce(async (name: string) => {
      setLoading(true);
      setError(null);

      try {
        if (name.toLowerCase() === "negroni") {
          setCocktail(mockData[0]);
        } else {
          setCocktail(null);
        }
      } catch (err) {
        console.error('Fetch Error:', err);
        setError('Failed to fetch cocktail');
      } finally {
        setLoading(false);
        setHasFetched(true);
      }
    }, 500),
    []
  );

  const handleSearchClick = () => {
    fetchCocktailData(cocktailName);
  };

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
  {[heroImage01, heroImage02, heroImage03, heroImage].map((imgSrc, index) => (
    <Box
      key={index}
      sx={{
        position: 'relative',
        flex: '1 1 25%',
        height: '300px',
        overflow: 'hidden',
        
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
  <Grid container spacing={2} sx={{ mt: 2, p: 1 }}>
    <Grid size={{ xs: 12, sm: 6, md: 12 }} >
      <CustomSlider cardData={mockData} />
    </Grid>
  </Grid>
</Box>

  
  );
};

export default Hero;
