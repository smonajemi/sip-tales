import { useCallback } from 'react';
import http from '../../http/axios'; // Adjust the path based on your folder structure
import { Cocktail, CocktailResponse } from '../../types/cocktail.types'; // Adjust the path based on your folder structure

export const useCocktailApi = () => {

  const fetchCocktailByName = useCallback(async (name: string): Promise<Cocktail[]> => {
    try {
      // Perform the API request
      const response = await http.get<CocktailResponse>(`api?name=${name}`);
      console.log(response.data); // Log data for debugging

      // Return the data which should be an array of Cocktail objects
      return response.data; // Adjust if the response structure is different
    } catch (error) {
      console.error('Error fetching cocktail:', error);
      // Handle the error appropriately, e.g., throw or return an empty array
      return [];
    }
  }, []);


  return {

    fetchCocktailByName,
  } as const;
};
