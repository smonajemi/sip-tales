import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import debounce from 'lodash.debounce';
import { useCocktailApi } from '../hooks/useCocktailApi';
import { Cocktail } from '../../types/cocktail.types';
import heroImage from '../../images/bar01.jpg';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { useCallback } from 'react';

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
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || heroImage})`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || heroImage})`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

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

    const fetchCocktailData = useCallback(
      debounce(async (name: string) => {
        setLoading(true);
        setError(null);

        try {
          const data = await fetchCocktailByName(name);

          if (Array.isArray(data) && data.length > 0) {
            setCocktail(data[0]); // Assuming `data` is an array
          } else {
            setCocktail(null);
          }
        } catch (err) {
          console.error('Fetch Error:', err); // Log error for debugging
          setError('Failed to fetch cocktail');
        } finally {
          setLoading(false);
          setHasFetched(true); // Mark that data has been fetched
        }
      }, 500),
      [fetchCocktailByName]
    );

  const handleSearchClick = () => {
    fetchCocktailData(cocktailName);
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...(theme.palette.mode === 'dark' && {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          // pb: { xs: 0, sm: 0 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Mix&nbsp;Timeless&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: theme.palette.primary.main,
                ...(theme.palette.mode === 'dark' && {
                  color: theme.palette.primary.light,
                }),
              })}
            >
              Cocktails
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Master the art of cocktails with expert recipes. Discover, create, and savor history in every sip. Cheers to innovation!
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="cocktail-search" sx={visuallyHidden}>
              Search Cocktail
            </InputLabel>
            <TextField
              id="cocktail-search"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Your Cocktail Inspiration"
              placeholder="Your Cocktail Inspiration"
              fullWidth
              value={cocktailName}
              onChange={(e) => setCocktailName(e.target.value)}
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Your Cocktail Inspiration',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </Stack>
          {/* <Divider sx={{ margin: '15px 0px 30px 0px', borderColor: 'text.primary'}} /> */}
          {loading ? (
            <CircularProgress />
          ) : (
            <Box>
              {cocktail ? (
                <Box mb={0}>
                  <Typography variant="body1">
                    <Typography component="span" fontWeight="bold">
                      Name:
                    </Typography>{' '}
                    {capitalize(cocktail.name)}
                  </Typography>
                  <Typography variant="body1">
                    <Typography component="span" fontWeight="bold">
                      Ingredients:
                    </Typography>{' '}
                    {cocktail.ingredients}
                  </Typography>
                  <Typography variant="body1">
                    <Typography component="span" fontWeight="bold">
                      Instructions:
                    </Typography>{' '}
                    {cocktail.instructions}
                  </Typography>
                </Box>
              ) : (
                hasFetched && !error && (
                  <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                    No cocktails in sight — guess we're on a dry spell!
                  </Typography>
                )
              )}
            </Box>
          )}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        </Stack>
      </Container>
      <StyledBox id="image" />
    </Box>
  );
};

export default Hero;
