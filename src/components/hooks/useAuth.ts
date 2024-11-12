import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Replace 'authToken' with the key you use for storing the token
    setIsLoggedIn(!!token); // Set `isLoggedIn` to true if the token exists
  }, []);

  return { isLoggedIn } as const;
};

export default useAuth;
