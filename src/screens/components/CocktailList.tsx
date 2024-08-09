import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useCocktailApi } from '../hooks/useCocktailApi';
import { Cocktail } from '../../types/cocktail.types';

const CocktailList: React.FC = () => {
  const { fetchCocktailByName } = useCocktailApi();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Start with false
  const [error, setError] = useState<string | null>(null);
  const [cocktailName, setCocktailName] = useState<string>('Margarita');

  const capitalize = (text: string | undefined): string => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const fetchCocktailData = useCallback(
    debounce(async (name: string) => {
      setLoading(true);
      setError(null);
  
      try {
        const data = await fetchCocktailByName(name);
  
        if (Array.isArray(data) && data.length > 0) {
          setCocktail(data[0]); // Assuming `data` is an array
        } else {
          setCocktail(null);
        }
      } catch (err) {
        console.error('Fetch Error:', err); // Log error for debugging
        setError('Failed to fetch cocktail');
      } finally {
        setLoading(false);
      }
    }, 500), // Debounce delay of 500ms
    [] // No dependencies if you want it to be created once
  );
  
  const handleSearchClick = () => {
    fetchCocktailData(cocktailName);
  };

  return (
    <div>
      <h1>Cocktail Details</h1>
      <div>
      {loading ? <p>Loading...</p> : 
        <><p><strong>Name:</strong> {capitalize(cocktail?.name)}</p>
        <p><strong>Ingredients:</strong> {cocktail?.ingredients}</p>
        <p><strong>Instructions:</strong> {cocktail?.instructions}</p></>
      }
      </div>
      {/* Input to change cocktail name */}
      <input 
        type="text" 
        value={cocktailName} 
        onChange={(e) => setCocktailName(e.target.value)} 
      />
      {/* Button to trigger search */}
      <button onClick={handleSearchClick}>Search</button>

      {/* Conditional rendering for loading and error states */}
      {error && <p>{error}</p>}
      {!loading && !error && !cocktail && <p>No cocktail found.</p>}
    </div>
  );
};

export default CocktailList;
