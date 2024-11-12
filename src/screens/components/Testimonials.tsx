import * as React from 'react';

import { Box, Container, useTheme } from '@mui/system';
import { Avatar, Typography, Grid, Card, CardContent, CardHeader } from '@mui/material';
import alexaLee from '../../images/characters/alexaLee.png'
import jordanKim from '../../images/characters/jordanKim.png'
import taylorCruz from '../../images/characters/taylorCruz.png'
import morganBlake from '../../images/characters/morganBlake.png'
import chrisCrate from '../../images/characters/chrisCrate.png'
import samParker from '../../images/characters/samParker.png'



const userTestimonials = [
  {
    avatar: <Avatar alt="Alexa Lee" src={alexaLee}  sx={{ width: 50, height: 50 }}/>,
    name: 'Alexa Lee',
    occupation: 'Mixology Enthusiast',
    testimonial:
      "Sip&Tales helped me make a killer Negroni on a first date, and it sparked the perfect conversation! The app’s bartender tips made me feel like a pro – safe to say, it was a hit!",
  },
  {
    avatar: <Avatar alt="Jordan Kim" src={jordanKim} sx={{ width: 50, height: 50 }}/>,
    name: 'Jordan Kim',
    occupation: 'Cocktail Connoisseur',
    testimonial:
      "Thanks to Sip&Tales, I nailed the art of the Old Fashioned just in time for a house party. Not only did I impress everyone, but let’s just say my date was more than impressed by my mixology skills!",
  },
  {
    avatar: <Avatar alt="Taylor Cruz" src={taylorCruz} sx={{ width: 50, height: 50 }}/>,
    name: 'Taylor Cruz',
    occupation: 'Social Butterfly',
    testimonial:
      "This app has been a game-changer! I learned how to make drinks with a history that adds charm and intrigue – it’s been a perfect icebreaker on so many nights out.",
  },
  {
    avatar: <Avatar alt="Morgan Blake" src={morganBlake} sx={{ width: 50, height: 50 }}/>,
    name: 'Morgan Blake',
    occupation: 'Life of the Party',
    testimonial:
      "Sip&Tales helped me level up my cocktail game. I’m now known for my drinks and stories behind each one – my friends can’t get enough, and neither can my new special someone!",
  },
  {
    avatar: <Avatar alt="Chris Crate" src={chrisCrate} sx={{ width: 50, height: 50 }}/>,
    name: 'Chris Crate',
    occupation: 'Weekend Mixologist',
    testimonial:
      "I started using Sip&Tales to impress friends, but it’s also made date nights way more exciting. Learning cocktails with real bartender advice is like having a cheat code for great nights.",
  },
  {
    avatar: <Avatar alt="Sam Parker" src={samParker} sx={{ width: 50, height: 50 }}/>,
    name: 'Sam Parker',
    occupation: 'Home Bar Aficionado',
    testimonial:
      "Sip&Tales has turned my place into the go-to hangout spot. The recipes are spot-on, and every gathering ends with people raving about my bartending skills. 10/10 – would recommend!",
  },
];


const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

const Testimonials = () => {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
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
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Testimonials
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid 
          item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}
          >
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',

              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
              
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
