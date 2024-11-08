import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

import featuredImage01 from '../../images/bar02.jpg'
import featuredImage02 from '../../images/bar03.jpg'
import featuredImage03 from '../../images/bar04.jpg'

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Recipe Search & Discovery',
    description:
      'Discover a wide range of cocktail recipes, complete with detailed history and unique bartender tips that bring your drinks to life.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url(${featuredImage01})`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Personalized Bartender Tips',
    description:
      'Learn cocktail crafting secrets from real bartenders, including measurements, techniques, and ingredient swaps for a professional touch.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url(${featuredImage02})`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Cocktail History & Storytelling',
    description:
      'Discover the stories behind your favorite cocktails with Sip&Tales. Learn the history, legends, and interesting facts about each drink to make your bartending experience even more enjoyable.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url(${featuredImage03})`,
  },
];


interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: theme.palette.primary.light, // Access palette directly
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.palette.mode === 'dark' && {
          borderColor: theme.palette.primary.dark, // Adjust for dark mode if necessary
        },
      },
    },
  ],
}));


interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}) => {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          component="div" // Add 'component' if needed
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',  // These use custom properties
            ...theme.palette.mode === 'dark' && {
              backgroundImage: 'var(--items-imageDark)',
            },
            '--items-imageLight': items[selectedItemIndex]?.imageLight || '',
            '--items-imageDark': items[selectedItemIndex]?.imageDark || '',
          })}

        />

        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

const Features: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Product features
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#9E5B40', mb: { xs: 2, sm: 4 } }}
        >
         Sip&Tales offers a variety of key features including a comprehensive cocktail search, personalized bartender tips, cocktail history and storytelling, 
         cross-platform accessibility, customizable recipes, user reviews, interactive shopping lists, 
         and premium add-ons, all designed to enhance your mixology experience and make every drink memorable.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover, // Direct access to theme.palette
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected', // This should be theme.palette.action.selected
                  },
                ]}
              >

                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}
                  <Typography variant="h6" color="#D87A3D">{title}</Typography>
                  <Typography variant="body2" color='#9E5B40'>{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              component="div"
              sx={(theme) => ({
                m: 'auto',
                width: 420,
                height: 400,
                backgroundSize: 'cover',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                  
                }),
                '--items-imageLight': items[selectedItemIndex]?.imageLight ?? '',
                '--items-imageDark': items[selectedItemIndex]?.imageDark ?? '',
                
              })}
            />

          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Features;
