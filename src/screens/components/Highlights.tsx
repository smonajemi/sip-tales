import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
interface ListItem {
  icon: ReactNode;
  title: string;
  description: string;
}
interface HighlightsProps {
  isDevice: boolean  
  listItems?: ListItem[];
}

const Highlights: React.FC<HighlightsProps> = ({isDevice, listItems}) => {
  return (
 
      <Container
       id="highlights"
        sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
        pt: { xs: 4, sm: 2 },
        pb: { xs: 8, sm: 8 },
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
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Discover what makes *Sip&Tales* your go-to for cocktail recipes: from diverse drink
          options to bartender insights, each feature enhances your mixology experience.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {listItems?.map((item, index) => (
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
 
  );
};


export default Highlights;
