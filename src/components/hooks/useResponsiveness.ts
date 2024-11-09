import { useMedia } from "use-media";
import { MouseEvent } from 'react';

export const useResponsiveness = () => {

 const isDevice = useMedia({minWidth: 0, maxWidth: 1023})

 const handleSmoothScroll = (e: MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return {
        isDevice,
        handleSmoothScroll
    } as const
}