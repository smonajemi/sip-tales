export interface CocktailTypes {
    id?: string;
    image: string;
    tag: string;
    ingredients: string[];
    description: string;
    recipe: { ingredient: string; amount?: string }[];
    name: string;
    similar_drinks?: { drink: string; description: string }[];
}

export interface CocktailCardTypes {
    id?: string;
    title: string;
    description: string;
    content?: React.ReactNode;
  }
  
export type CocktailResponseTypes = CocktailTypes[];
