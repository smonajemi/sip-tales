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

import featuredImage from '../../images/pic01.png'

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url(${featuredImage})`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Mobile integration',
    description:
      'This item could provide information about the mobile app version of the product.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url(${featuredImage})`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Available on all platforms',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url(${featuredImage})`,
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
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          Provide a brief overview of the key features of the product. For example,
          you could list the number of features, their types or benefits, and
          add-ons.
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
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
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
                height: 500,
                backgroundSize: 'contain',
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
