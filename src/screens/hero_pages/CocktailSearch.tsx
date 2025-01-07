import React, { FC } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CocktailChart from './components/CocktailChart';
import CustomizedTreeView from './components/CustomizedTreeView';

interface CocktailSearchProps {
  message?: string;
}

const CocktailSearch: FC<CocktailSearchProps> = ({ message }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
    {/* cards */}
    <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
      Overview
    </Typography>
    <Grid
      container
      spacing={2}
      columns={12}
      sx={{ mb: (theme) => theme.spacing(2) }}
    >
      {/* {data.map((card, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard {...card} />
        </Grid>
      ))} */}
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        {/* <HighlightedCard /> */}
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        {/* <SessionsChart /> */}
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        {/* <PageViewsBarChart /> */}
      </Grid>
    </Grid>
    <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
      Details
    </Typography>
    <Grid container spacing={2} columns={12}>
      <Grid size={{ xs: 12, lg: 9 }}>
        {/* <CustomizedDataGrid /> */}
      </Grid>
      <Grid size={{ xs: 12, lg: 3 }}>
        <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
          {/* <CustomizedTreeView /> */}
          <CocktailChart />
        </Stack>
      </Grid>
    </Grid>
  </Box>
  );
};

export default CocktailSearch;
