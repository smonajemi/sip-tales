import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Fragment, FunctionComponent } from 'react';

const products = [
  {
    name: 'Pro Cocktail Plan',
    desc: 'Monthly subscription for access to premium recipes',
    price: '$2.99',
  },
  {
    name: 'Personalized Recommendations',
    desc: 'Included in the Premium plan for tailored cocktail suggestions',
    price: 'Free',
  },
  {
    name: 'Bartender Workshop',
    desc: 'Monthly workshop to improve your cocktail-making skills',
    price: '$15.00',
  },
  {
    name: 'Recipe Sharing Add-on',
    desc: 'License for sharing custom recipes with friends',
    price: '$9.99',
  },
];


interface InfoProps {
  totalPrice: string;
}

const Info: FunctionComponent<InfoProps> = ({ totalPrice }) => {

  return (
    <Fragment>
    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
      Total
    </Typography>
    <Typography variant="h4" gutterBottom>
      {totalPrice}
    </Typography>
    <List disablePadding>
      {products.map((product) => (
        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
          <ListItemText
            sx={{ mr: 2 }}
            primary={product.name}
            secondary={product.desc}
          />
          <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
            {product.price}
          </Typography>
        </ListItem>
      ))}
    </List>
  </Fragment>
  )
}

export default Info;
