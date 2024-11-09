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

  // Handle click on a chip (e.g., in a filter or selection)
  const handleClick = (chip: string) => {
    alert(`You clicked the ${chip} chip.`);
  };

  

  const cardData = [
    {
      img: img01,
      tag: '',
      title: '',
      description:'',
      authors: [
        { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
        { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
      ],
    },
    {
      img: img02,
      tag: '',
      title: '',
      description:'',
      authors: [
        { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
        { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
      ],
    },
    {
      img: img03,
      tag: '',
      title: '',
      description:'',
      authors: [
        { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
        { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
      ],
    },
    {
      img: img04,
      tag: '',
      title: '',
      description:'',
      authors: [
        { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
        { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
      ],
    },
    {
      img: img05,
      tag: '',
      title: '',
      description:'',
      authors: [
        { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
        { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
      ],
    },
    {
      img: img06,
      tag: '',
      title: '',
      description:'',
      authors: [
        { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
        { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
      ],
    },
  ];

  const categories = [
    "All categories",
    "Shaken",
    "Not Shaken"
  ];
  return { focusedCardIndex, handleFocus, handleBlur, handleClick, cardData, categories } as const;
};

export default useCocktail;
