export interface Cocktail {
    id: string;
    image: string;
    tag: string;
    ingredients: string[];
    description: string;
    recipe: { ingredient: string; amount: string }[];
    name: string;
    similar_drinks?: { drink: string; description: string }[];
}

export type CocktailResponse = Cocktail[];
