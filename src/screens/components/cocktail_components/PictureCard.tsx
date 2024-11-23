import { Card, Typography, CardMedia, styled, CardContent, Box, List, ListItem, Stack, Chip } from "@mui/material";
import { FC, useRef, useEffect, useState } from "react";
import { CocktailTypes } from "../../../types/cocktail.types";
import Grid from "@mui/material/Grid2";
import CustomModal from "../../../components/CustomModal";

interface CustomSliderProps {
  cardData: CocktailTypes[];
  autoPlay?: number;
  cardStyles?: object;
  mediaStyles?: object;
  contentStyles?: object;
  classicCocktailData: CocktailTypes[];
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
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

const CustomSlider: FC<CustomSliderProps> = ({
  autoPlay = 0,
  cardData,
  classicCocktailData,
  cardStyles = {},
  mediaStyles = {},
  contentStyles = {},
}) => {
  const autoPlayRef = useRef<() => void>();
  const [focusedCardIndex, setFocusedCardIndex] = useState<number | null>(null);
  const [selectedCocktail, setSelectedCocktail] = useState<CocktailTypes | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFocus = (index: number) => setFocusedCardIndex(index);
  const handleBlur = () => setFocusedCardIndex(null);

  const handleSimilarDrinkClick = (drinkName: string) => {
    const similarDrink = classicCocktailData.find(drink => drink.name === drinkName);
    if (similarDrink) {
      setSelectedCocktail(similarDrink);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCocktail(null);
  };

  useEffect(() => {
    if (autoPlay && autoPlay > 0) {
      const play = () => {
        if (autoPlayRef.current) autoPlayRef.current();
      };
      const interval = setInterval(play, autoPlay * 1000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  return (
    <>
      <Grid container spacing={2} columns={12} justifyContent="center">
        {cardData?.map((card, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            key={index}
          >
            <StyledCard
              variant="outlined"
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index ? 'Mui-focused' : ''}
              sx={cardStyles}
            >
              <CardMedia
                component="img"
                alt={card.name}
                image={card.image}
                sx={{
                  aspectRatio: '16 / 9',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  ...mediaStyles,
                }}
              />
              <StyledCardContent sx={contentStyles}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" width="100%">
                  <Typography gutterBottom variant="caption" component="div">
                    {card.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" gutterBottom>
                    {card.tag.charAt(0).toUpperCase() + card.tag.slice(1)}
                  </Typography>
                </Stack>
                <Typography gutterBottom variant="h6" component="div">
                  {card.description}
                </Typography>

                <Box>
                  {card.recipe.map((rec, index) => (
                    <Typography
                      key={index}
                      variant="caption"
                      color="text.secondary"
                      component="span"
                    >
                      {index > 0 && ", "} {rec.ingredient} {rec.amount}
                    </Typography>
                  ))}
                </Box>

                {card.similar_drinks && card.similar_drinks.length > 0 && (
                  <div>
                    <Typography variant="subtitle2" color="text.primary" gutterBottom align="center">
                      Similar Drinks:
                    </Typography>
                    <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
                      {card.similar_drinks.map((similar, index) => (
                       <Chip
                       key={index}
                       label={similar.drink}
                       variant="outlined" 
                       onClick={() => handleSimilarDrinkClick(similar.drink)}
                       style={{ cursor: 'pointer' }}
                       color="secondary" 
                     />
                      ))}
                    </Box>
                  </div>
                )}
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
        
      </Grid>

      {selectedCocktail && (
        <CustomModal
          open={isModalOpen}
          onClose={handleCloseModal}
          title={selectedCocktail.name}
          content={
            <Box>
              <img src={selectedCocktail.image} alt={selectedCocktail.name} style={{ width: '100%', borderRadius: 4 }} />
              <Typography variant="subtitle1" mt={2}>{selectedCocktail.description}</Typography>
              <Box mt={2}>
                {selectedCocktail.recipe.map((rec, index) => (
                  <Typography key={index} variant="body2">
                    {rec.ingredient}: {rec.amount}
                  </Typography>
                ))}
              </Box>
            </Box>
          }
        />
      )}
    </>
  );
};

export default CustomSlider;

