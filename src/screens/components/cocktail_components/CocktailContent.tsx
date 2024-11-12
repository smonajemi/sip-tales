import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Box, AvatarGroup, Avatar, FormControl, OutlinedInput, InputAdornment, IconButton, Chip, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import { SearchRounded as SearchRoundedIcon } from '@mui/icons-material'
import useCocktail from './hooks/useCocktail';
import cocktailDataList from './cocktailList01.json'
import { useState } from 'react';
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',

  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const Search = () => (
  <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
    <OutlinedInput
      size="small"
      id="search"
      placeholder="Search…"
      sx={{ flexGrow: 1 }}
      startAdornment={
        <InputAdornment position="start" sx={{ color: 'text.primary' }}>
          <SearchRoundedIcon fontSize="small" />
        </InputAdornment>
      }
      inputProps={{
        'aria-label': 'search',
      }}
    />
  </FormControl>
);

const CocktailContent: React.FC = () => {
  const { focusedCardIndex, handleFocus, handleBlur, mockData, categories } = useCocktail();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  // Filter the cocktailDataList based on both the search query and selected category
  const filteredCocktails = cocktailDataList.filter((card) => {
    const matchesQuery = card.name.toLowerCase().includes(searchQuery);
    const matchesCategory = 
      selectedCategory === 'All categories' || 
      card.tag.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesQuery && matchesCategory;
  });
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Search Input */}
      <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
        <OutlinedInput
          size="small"
          id="search"
          placeholder="Search…"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1 }}
          startAdornment={
            <InputAdornment position="start" sx={{ color: 'text.primary' }}>
              <SearchRoundedIcon fontSize="small" />
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'search',
          }}
        />
      </FormControl>

      {/* Category Chips */}
      <Box sx={{ display: 'inline-flex', flexDirection: 'row', gap: 3, overflow: 'auto' }}>
        {categories.map((category) => (
          <Chip
            key={category}
            onClick={() => handleCategoryClick(category)}
            size="medium"
            label={category}
            sx={{
              backgroundColor: category === selectedCategory ? 'primary.main' : 'transparent',
              border: 'none',
            }}
          />
        ))}
      </Box>

      {/* Filtered Cocktail List */}
      <Grid container spacing={4}>
        {filteredCocktails.map((card, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              paddingBottom: '0 !important',
            }}
          >
            <StyledCard>
              <CardMedia
                component="img"
                alt={card.name}
                height="140"
                image={card.image}
                sx={{
                  backgroundColor: 'transparent',
                  height: { xs: 'auto', sm: 140 },
                  objectFit: 'cover',
                  backgroundRepeat: "no-repeat",
                }}
              />
              <StyledCardContent>
                <Chip size="small" label={card.tag.charAt(0).toUpperCase() + card.tag.slice(1)}
                  sx={(theme) => ({
                    backgroundColor: theme.palette.baseShadow
                  })} />
                <Typography variant="h6">{card.name}</Typography>
                <StyledTypography variant="body2" color="text.secondary">
                  {card.description}
                </StyledTypography>
              </StyledCardContent>
              {/* <Author authors={card.authors} /> */}
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default CocktailContent;
