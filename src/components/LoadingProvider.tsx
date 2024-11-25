import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context value type
interface LoadingContextValue {
  loading: boolean;
  setLoading: (status: boolean) => void;
}

// Create the context with a default value
const LoadingContext = createContext<LoadingContextValue | undefined>(undefined);

// Provider component
export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook for accessing the context
export const useLoading = (): LoadingContextValue => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
