import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Box, AvatarGroup, Avatar, FormControl, OutlinedInput, InputAdornment, IconButton, Chip, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import { SearchRounded as SearchRoundedIcon } from '@mui/icons-material'
import useCocktail from './hooks/useCocktail';
import cocktailDataList from './cocktailData/cocktailList01.json'
import { useState } from 'react';
import CustomPagination from '../../../components/CustomPagination';
import CustomSnackbar from '../../../components/CustomSnackbar';
import { Link, useNavigate } from 'react-router-dom';
import { useResponsiveness } from '../../../components/hooks/useResponsiveness';


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


interface CocktailContentProps {
  isLoggedIn: boolean
}

const CocktailContent: React.FC<CocktailContentProps> = ({ isLoggedIn }) => {
  const { focusedCardIndex, handleFocus, handleBlur, mockData, categories } = useCocktail();
  const {isDevice} = useResponsiveness()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [page, setPage] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const ITEMS_PER_PAGE = 6

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

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Calculate which items to display on the current page
  const paginatedCocktails = filteredCocktails.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );


  const handleCardClick = (data: any, id: string) => {
    // if (!isLoggedIn) {
    //   setSnackbarOpen(true); // Always set to true on card click
    // }
    if (data) {
      navigate(`/cocktail/${id}?name=${data.title}`, { state: { data } });
    } else {
      alert('Data is null or undefined. Cannot navigate.');
    }
  };

  // Function to handle Snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

      {!isDevice ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Ensures search moves to the far right
            flexWrap: 'nowrap', // Prevents wrapping
            gap: 2,
            width: '100%',
          }}
        >
          {/* Category Chips */}
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'row',
              gap: 3,
              overflow: 'auto',
            }}
          >
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

          {/* Search Input */}
          <FormControl sx={{ width: { xs: '50%', md: '25ch' } }} variant="outlined">
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
        </Box>
      ) : (
        <>
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

        </>
      )}

      {/* Filtered Cocktail List */}
      <Grid container spacing={4}>
        {paginatedCocktails.map((card, index) => (
          <Grid
            key={index}
            size={{ xs: 6, sm: 6, md: 4 }}
            onClick={() => {
              handleCardClick({ title: card.name, description: card.description }, card.id);
            }}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              paddingBottom: '0 !important',
              cursor: !isLoggedIn ? 'pointer' : 'default',
            }}
          >
            <StyledCard
              style={{
                filter: isLoggedIn ? 'none' : 'blur(8px)',
                position: 'relative',
              }}
            >
              {!isLoggedIn && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    zIndex: 1,
                  }}
                >
                  <Typography variant="body1" align="center">
                    Please log in to view details
                  </Typography>
                </Box>
              )}
              <CardMedia
                component="img"
                alt={card.name}
                height="140"
                image={card.image}
                sx={{
                  backgroundColor: 'transparent',
                  height: { xs: 'auto', sm: 140 },
                  objectFit: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <StyledCardContent>
                <Chip
                  size="small"
                  label={card.tag.charAt(0).toUpperCase() + card.tag.slice(1)}
                  sx={(theme) => ({
                    backgroundColor: theme.palette.baseShadow,
                  })}
                />
                <Typography variant="h6">{card.name}</Typography>
                <StyledTypography variant="body2" color="text.secondary">
                  {card.description}
                </StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={
          <span>
            Please log in to access this content.{' '}
            <Link to="/signin" style={{ color: '#1976d2', textDecoration: 'underline' }}>
              Login
            </Link>
          </span>
        }
        severity="warning"
      />


      <CustomPagination
        count={Math.ceil(filteredCocktails.length / ITEMS_PER_PAGE)}
        page={page}
        onChange={handlePageChange}
      />
    </Box>
  );
};


export default CocktailContent;
