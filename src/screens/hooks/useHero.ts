import { useEffect, useState } from "react";
import { heroImages } from "../../images/image";
import { CocktailTypes, PageTypes } from "../../types";


const mockData: CocktailTypes[] = [
  {
    id: "1",
    name: "Negroni",
    tag: "stirred",
    image: heroImages[0],
    description:
      "The Negroni is a bittersweet cocktail with a perfect balance of gin, vermouth, and Campari.",
    recipe: [
      { ingredient: "Gin", amount: "2oz" },
      { ingredient: "Sweet Vermouth", amount: "1oz" },
      { ingredient: "Campari", amount: "1oz" },
      { ingredient: "Orange Twist for garnish", amount: "as needed" },
    ],
    similar_drinks: [
      {
        drink: "Boulevardier",
        description:
          "A Negroni variation with whiskey instead of gin, offering a richer and smoother flavor profile.",
      },
      {
        drink: "Americano",
        description:
          "A lighter and more refreshing version of the Negroni, replacing gin with soda water.",
      },
      {
        drink: "Negroni Sbagliato",
        description:
          "A bubbly twist on the classic Negroni, using sparkling wine instead of gin for a festive touch.",
      },
    ],
    ingredients: ["Gin", "Sweet Vermouth", "Campari", "Orange Twist for garnish"],
  },
  {
    id: "2",
    name: "Margarita",
    tag: "shaken",
    image: heroImages[1],
    description:
      "The Margarita is a refreshing, tangy cocktail that combines tequila, lime juice, and orange liqueur for a perfect balance of flavors.",
    recipe: [
      { ingredient: "Tequila", amount: "2oz" },
      { ingredient: "Lime Juice", amount: "1oz" },
      { ingredient: "Rich Syrup", amount: "0.25oz" },
      { ingredient: "Triple Sec", amount: "0.75oz" },
      { ingredient: "Salt for rim", amount: "as needed" },
    ],
    similar_drinks: [
      {
        drink: "Daiquiri",
        description:
          "A rum-based cousin of the Margarita, equally refreshing but with a slightly sweeter taste.",
      },
      {
        drink: "Paloma",
        description:
          "A Mexican favorite, similar to the Margarita but featuring grapefruit soda instead of lime and orange liqueur.",
      },
      {
        drink: "Tommy's Margarita",
        description:
          "A simplified version of the Margarita, using agave syrup instead of orange liqueur for a more natural sweetness.",
      },
    ],
    ingredients: ["Tequila", "Lime Juice", "Rich Syrup", "Triple Sec", "Salt for rim"],
  },
];

const shuffleArray = (array: readonly string[]): string[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 4);
};
const capitalize = (text: string | undefined): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const testData: PageTypes[] = [
  {
    title: 'Cocktail Finder',
    description: 'Find your favorite cocktails.',
    content: 'A tool to search and discover cocktails with detailed recipes.',
    imageUrl: heroImages[2],
    url: '/cocktails/find',
    iconName: 'search', // Example icon name
  },
  {
    title: 'Books',
    description: 'Explore cocktail-related books.',
    content: 'A curated selection of books for cocktail enthusiasts.',
    imageUrl: heroImages[3],
    url: '/cocktails/books',
    iconName: 'book', // Example icon name
  },
  {
    title: 'AI Cocktail',
    description: 'AI-powered cocktail suggestions.',
    content: 'Get personalized cocktail recommendations based on your preferences.',
    imageUrl: heroImages[5],
    url: '/cocktails/aicocktails',
    iconName: 'robot', // Example icon name
  },
  {
    title: 'Tales',
    description: 'Discover the stories behind cocktails.',
    content: 'Learn about the history and origins of famous cocktails.',
    imageUrl: heroImages[8],
    url: '/cocktails/tales',
    iconName: 'story', // Example icon name
  },
  {
    title: 'Whiskey',
    description: 'All about whiskey cocktails.',
    content: 'Discover, learn, and create whiskey-based drinks.',
    imageUrl: heroImages[2],
    url: '/cocktails/whiskey',
    iconName: 'whiskey', // Example icon name
  },
];


const useHero = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>(shuffleArray(heroImages));
  const [fadeStates, setFadeStates] = useState<boolean[]>(Array(4).fill(false));

  useEffect(() => {
    const randomFadeIntervals = () => {
      shuffledImages.forEach((_, index) => {
        const delay = Math.random() * 2000;

        setTimeout(() => {
          setFadeStates((prev) => {
            const newFadeStates = [...prev];
            newFadeStates[index] = true;
            return newFadeStates;
          });

          setTimeout(() => {
            setShuffledImages(shuffleArray(heroImages));
            setFadeStates((prev) => {
              const newFadeStates = [...prev];
              newFadeStates[index] = false;
              return newFadeStates;
            });
          }, 500);
        }, delay);
      });
    };

    const interval = setInterval(() => {
      randomFadeIntervals();
    }, 5000);

    return () => clearInterval(interval);
  }, [shuffledImages]);

  return { mockData, shuffledImages, fadeStates, capitalize, testData, heroImages };
};

export default useHero;
