// src/hooks/useNav.ts
import { useNavigate } from 'react-router-dom';

const useNav = () => {
  const navigate = useNavigate();

  const redirectTo = (path: string) => {
    navigate(path);
  };

  return {
    redirectTo,
  } as const;
};

export default useNav;
