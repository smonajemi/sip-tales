import { useCallback } from 'react';
import http from '../../http/axios'; 
import { CocktailTypes, CocktailResponse } from '../../types/cocktail.types'; 

export const useCocktailApi = () => {

  const fetchCocktailByName = useCallback(async (name: string): Promise<CocktailTypes[]> => {
    try {
      // Perform the API request
      const response = await http.get<CocktailResponse>(`api?name=${name}`);
      console.log(response.data); 
      return response.data;
    } catch (error) {
      console.error('Error fetching cocktail:', error);

      return [];
    }
  }, []);

  

  return {

    fetchCocktailByName,
  } as const;
};
