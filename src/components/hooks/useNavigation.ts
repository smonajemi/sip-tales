import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the custom hook
const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = useCallback((path: string, state?: Record<string, any>) => {
    navigate(path, { state });
  }, [navigate]);


  const goToHome = useCallback(() => goTo('/'), [goTo]);
  const goToCheckout = useCallback(() => goTo('/checkout'), [goTo]);
  const goToSignUp = useCallback(() => goTo('/signup'), [goTo]);

  return { goTo, goToHome, goToCheckout, goToSignUp } as const;
};

export default useNavigation;
