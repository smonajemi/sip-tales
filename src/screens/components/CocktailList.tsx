import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useCocktailApi } from '../hooks/useCocktailApi';
import { Cocktail } from '../../types/cocktail.types';
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CocktailList: React.FC = () => {
  const { fetchCocktailByName } = useCocktailApi();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cocktailName, setCocktailName] = useState<string>('');
  const [hasFetched, setHasFetched] = useState<boolean>(false);
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
    <Box p={2}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Cocktail Details
        </Typography>
        <Divider sx={{ margin: '15px 0px 30px 0px', borderColor: 'text.primary', borderWidth: .5 }} />
      </Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          {cocktail ? (
            <Box mb={2}>
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
            hasFetched && !error && <Typography variant="body1"style={{ color: theme.palette.error.main }}>No cocktails in sight—guess we're on a dry spell!</Typography>
          )}
        </Box>
      )}
      <TextField
        label="Cocktail Name"
        variant="outlined"
        value={cocktailName}
        onChange={(e) => setCocktailName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearchClick}
        sx={{ mt: 2 }}
      >
        Search
      </Button>
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
    </Box>
  );
};

export default CocktailList;
