import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {SearchRounded as SearchRoundedIcon, HistoryEduRounded as HistoryEduRoundedIcon, LocalBarRounded as LocalBarRoundedIcon, SettingsSuggestRounded as SettingsSuggestRoundedIcon, SupportAgentRounded as SupportAgentRoundedIcon, PrecisionManufacturingRounded as PrecisionManufacturingRoundedIcon} from '@mui/icons-material';


const items = [
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

const Highlights = () => (
  <Box
    id="highlights"
    sx={{
      pt: { xs: 4, sm: 2 },
      pb: { xs: 8, sm: 8 },
      color: 'white',
      bgcolor: 'grey.800',
      borderRadius: '15px'
    }}
  >
    <Container
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" gutterBottom>
          Highlights
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Explore why our product stands out: adaptability, durability,
          user-friendly design, and innovation. Enjoy reliable customer support and
          precision in every detail.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Stack
            
              direction="column"
              component={Card}
              spacing={1}
              useFlexGap
              sx={{
                color: 'inherit',
                p: 3,
                height: '100%',
                borderColor: 'hsla(220, 25%, 25%, 0.3)',
                backgroundColor: 'grey.800',
                boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',

              }}
            >
              <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
              <div>
                <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  {item.description}
                </Typography>
              </div>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Highlights;
