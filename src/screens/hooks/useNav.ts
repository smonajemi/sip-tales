// src/hooks/useNav.ts
import { useNavigate } from 'react-router-dom';

const useNav = () => {
  // const navigate = useNavigate();

  // const redirectTo = (path: string) => {
  //   navigate(path);
  // };

  const redirectTo = (path: string) => {
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
    document.querySelector(`a[href='${path}']`)?.dispatchEvent(clickEvent);
  };
  

  return {
    redirectTo,
  } as const;
};

export default useNav;
