import * as React from 'react';

import { Box, Button, Card, CardActions, CardContent, Chip, Container, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

import Grid from '@mui/material/Grid2';

import { AutoAwesome as AutoAwesomeIcon, CheckCircleRounded as CheckCircleRoundedIcon } from '@mui/icons-material';
import useNavigation from '../../components/hooks/useNavigation';

const tiers = [
  {
    title: 'Basic',
    subheader: 'Free Plan',
    priceMonthly: 0,
    priceAnnually: 0,
    description: [
      'Access to standard recipes',
      'Free cocktail search',
      'Create up to 3 custom cocktails',
      'Basic ingredient substitution suggestions'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Pro',
    subheader: 'Recommended',
    priceMonthly: 2.99,
    priceAnnually: 29.99,
    description: [
      'Access to premium recipes',
      'Signature cocktail suggestions',
      'Unlimited custom cocktails',
      'Recipe sharing feature',
      'Advanced ingredient substitution suggestions'
    ],
    buttonText: 'Start now',
    buttonVariant: 'contained',
    buttonColor: 'primary',
  },
  {
    title: 'Premium',
    subheader: 'For Enthusiasts',
    priceMonthly: 4.99,
    priceAnnually: 49.99,
    description: [
      'All Pro features',
      'Personalized cocktail recommendations',
      'Monthly cocktail workshops',
      'Early access to new features'
    ],
    buttonText: 'Join Premium',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = React.useState('monthly');
  const {goToSignUp} = useNavigation();

  const handleBillingCycleChange = (event: any) => {
    setBillingCycle(event.target.value);
  };

  return (
    <Container
      id="pricing"
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
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Discover the perfect cocktail experience at a price that fits your style!<br />
          From casual mixers to expert-level creations, our pricing options are designed to elevate every sip.
        </Typography>
      </Box>
      <RadioGroup
        row
        value={billingCycle}
        onChange={handleBillingCycleChange}
        sx={{ mb: 4 }}
      >
        <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
        <FormControlLabel value="annually" control={<Radio />} label="Annually" />
      </RadioGroup>
      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {tiers.map((tier, key) => (
          <Grid size={{ xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }}
            key={tier.title}>
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
                },
                tier.title === 'Professional' &&
                ((theme) => ({
                  border: 'none',
                  background:
                    'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                  boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                  ...theme.applyStyles('dark', {
                    background:
                      'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                    boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                  }),
                })),
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    },
                    tier.title === 'Professional' ? { color: 'grey.100' } : { color: '' },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                  )}
                </Box>
                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'baseline',
                    },
                    tier.title === 'Professional' ? { color: 'grey.50' } : { color: null },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    ${billingCycle === 'annually' ? tier.priceAnnually : tier.priceMonthly}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per {billingCycle}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {tier.description.map((line) => (
                  <Box key={line} sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.title === 'Professional'
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={'span'}
                      sx={[tier.title === 'Professional' ? { color: 'grey.50' } : { color: null }]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as 'outlined' | 'contained'}
                  color={tier.buttonColor as 'primary' | 'secondary'}
                  onClick={goToSignUp}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;
