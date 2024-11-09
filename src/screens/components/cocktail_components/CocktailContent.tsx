import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Box, AvatarGroup, Avatar, FormControl, OutlinedInput, InputAdornment, IconButton, Chip, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import {SearchRounded as SearchRoundedIcon} from '@mui/icons-material'
import useCocktail from './hooks/useCocktail';

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



const Author = ({ authors }: { authors: { name: string; avatar: string }[] }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px',
    }}
  >
    <Box
      sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
    >
      <AvatarGroup max={3}>
        {authors.map((author, index) => (
          <Avatar
            key={index}
            alt={author.name}
            src={author.avatar}
            sx={{ width: 24, height: 24 }}
          />
        ))}
      </AvatarGroup>
      <Typography variant="caption">
        {authors.map((author) => author.name).join(', ')}
      </Typography>
    </Box>
    <Typography variant="caption">July 14, 2021</Typography>
  </Box>
);

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
 const {focusedCardIndex, handleFocus, handleBlur, handleClick, cardData, categories} = useCocktail();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          {/* <RssFeedRoundedIcon /> */}
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
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
        onClick={() => handleClick(category)}
        size="medium"
        label={category}
        sx={{
          backgroundColor: category === "All categories" ? 'transparent' : 'transparent',
          border: 'none',
        }}
      />
    ))}
  </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <Search />
          {/* <IconButton size="small" aria-label="RSS feed">
            <RssFeedRounded />
          </IconButton> */}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
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
                alt={card.title}
                height="140"
                image={card.img}
                sx={{
                  backgroundColor: 'transparent',
                  height: { xs: 'auto', sm: 140 },
                  objectFit: 'cover',
                  backgroundRepeat: "no-repeat",
                }}
              />   
              <StyledCardContent>
                <Chip size="small" label={card.tag} sx={(theme) => ({
                  backgroundColor: theme.palette.baseShadow
                })} />
                <Typography variant="h6">{card.title}</Typography>
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
