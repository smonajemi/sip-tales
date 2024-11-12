import React from 'react';
import img01 from '../../../../images/bar05.jpg'
import img02 from '../../../../images/bar06.jpg'
import img03 from '../../../../images/bar07.jpg'
import img04 from '../../../../images/bar08.jpg'
import img05 from '../../../../images/bar09.jpg'
import img06 from '../../../../images/bar10.jpg'
import img07 from '../../../../images/bar11.jpg'

const useCocktail = () => {
  // State to track the focused card index
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  // Handle focus event on a card
  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  // Handle blur event (when focus is lost)
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

 
  

  const mockData = [
    {
      img: img01,
      id: '1',
      name: 'Negroni',
      description: 'A bitter and refreshing cocktail with a bold, herbal profile balanced by a hint of sweetness.',
      recipe: [
        { ingredient: 'Gin', amount: '2oz' },
        { ingredient: 'Campari', amount: '1oz' },
        { ingredient: 'Sweet Vermouth', amount: '1oz' },
      ],
      similar_drinks: [
        { drink: 'Boulevardier', description: 'A Negroni made with whiskey instead of gin.' },
        { drink: 'Negroni Sbagliato', description: 'A Negroni with sparkling wine instead of gin.' },
        { drink: 'White Negroni', description: 'A Negroni with Lillet Blanc and Suze instead of sweet vermouth and Campari.' },
      ],
      read_more_link: 'https://en.wikipedia.org/wiki/Negroni',
    },
    {
      img: img02,
      id: '2',
      name: 'Margarita',
      description: 'A tangy, citrus-forward cocktail with a perfect balance of sweetness and tartness.',
      recipe: [
        { ingredient: 'Tequila', amount: '2oz' },
        { ingredient: 'Lemon Juice', amount: '1oz' },
        { ingredient: 'Rich Syrup', amount: '0.25oz' },
        { ingredient: 'Triple Sec', amount: '0.75oz' },
      ],
      similar_drinks: [
        { drink: 'Tommy\'s Margarita', description: 'A Margarita without Triple Sec, using agave syrup instead.' },
        { drink: 'Mezcal Margarita', description: 'A Margarita with mezcal instead of tequila.' },
        { drink: 'Frozen Margarita', description: 'A blended version of the Margarita, served frozen.' },
      ],
      read_more_link: 'https://en.wikipedia.org/wiki/Margarita',
    },
    {
      img: img03,
      id: '3',
      name: 'Old Fashioned',
      description: 'A classic cocktail with a smooth and slightly sweet profile, with hints of citrus and aromatic bitters.',
      recipe: [
        { ingredient: 'Whiskey', amount: '2oz' },
        { ingredient: 'Sugar Cube', amount: '1 cube' },
        { ingredient: 'Angostura Bitters', amount: 'a few dashes' },
        { ingredient: 'Orange Peel', amount: 'for garnish' },
      ],
      similar_drinks: [
        { drink: 'Rum Old Fashioned', description: 'An Old Fashioned with rum as the base spirit.' },
        { drink: 'Tequila Old Fashioned', description: 'An Old Fashioned with tequila instead of whiskey.' },
        { drink: 'Maple Old Fashioned', description: 'An Old Fashioned with maple syrup instead of sugar.' },
      ],
      read_more_link: 'https://en.wikipedia.org/wiki/Old_Fashioned',
    },
    {
      img: img04,
      id: '4',
      name: 'Manhattan',
      description: 'A smooth and slightly sweet cocktail with rich notes of whiskey and a hint of herbal complexity.',
      recipe: [
        { ingredient: 'Rye Whiskey', amount: '2oz' },
        { ingredient: 'Sweet Vermouth', amount: '1oz' },
        { ingredient: 'Angostura Bitters', amount: 'a few dashes' },
      ],
      similar_drinks: [
        { drink: 'Rob Roy', description: 'A Manhattan made with Scotch instead of rye whiskey.' },
        { drink: 'Perfect Manhattan', description: 'A Manhattan with equal parts sweet and dry vermouth.' },
        { drink: 'Black Manhattan', description: 'A Manhattan with amaro instead of vermouth.' },
      ],
      read_more_link: 'https://en.wikipedia.org/wiki/Manhattan_(cocktail)',
    },
    {
      img: img05,
      id: '5',
      name: 'Martini',
      description: 'A dry, crisp cocktail with strong botanical notes from the gin, softened by vermouth.',
      recipe: [
        { ingredient: 'Gin', amount: '2oz' },
        { ingredient: 'Dry Vermouth', amount: '0.5oz' },
        { ingredient: 'Olive or Lemon Twist', amount: 'for garnish' },
      ],
      similar_drinks: [
        { drink: 'Dirty Martini', description: 'A Martini with a splash of olive brine for a savory note.' },
        { drink: 'Vodka Martini', description: 'A Martini made with vodka instead of gin.' },
        { drink: 'Gibson', description: 'A Martini garnished with a cocktail onion instead of an olive or twist.' },
      ],
      read_more_link: 'https://en.wikipedia.org/wiki/Martini_(cocktail)',
    },
    {
      img: img06,
      id: '6',
      name: 'Whiskey Sour',
      description: 'A tart and refreshing cocktail with a smooth balance of whiskey and citrus flavors.',
      recipe: [
        { ingredient: 'Whiskey', amount: '2oz' },
        { ingredient: 'Lemon Juice', amount: '1oz' },
        { ingredient: 'Rich Syrup', amount: '0.25oz' },
        { ingredient: 'Egg White', amount: 'optional, for froth' },
      ],
      similar_drinks: [
        { drink: 'New York Sour', description: 'A Whiskey Sour topped with a float of red wine.' },
        { drink: 'Gold Rush', description: 'A Whiskey Sour with honey syrup instead of simple syrup.' },
        { drink: 'Boston Sour', description: 'A Whiskey Sour with egg white for a frothy texture.' },
      ],
      read_more_link: 'https://en.wikipedia.org/wiki/Whiskey_Sour',
    },
  ];
  
  const categories = [
    "All categories",
    "Shaken",
    "Stirred"
  ];
  return { focusedCardIndex, handleFocus, handleBlur, mockData, categories } as const;
};

export default useCocktail;
