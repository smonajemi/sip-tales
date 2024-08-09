export interface Cocktail {
    id: string;
    ingredients: string[];
    instructions: string;
    name: string;
}

export type CocktailResponse = Cocktail[];
