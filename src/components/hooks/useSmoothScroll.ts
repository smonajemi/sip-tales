import { MouseEvent } from 'react';

const useSmoothScroll = () => {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {handleSmoothScroll} as const;
};

export default useSmoothScroll;
