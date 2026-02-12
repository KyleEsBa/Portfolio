import { useEffect, useRef, useState } from 'react';

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;

        // Only apply parallax when element is in viewport
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const scrollPosition = window.scrollY;
          const elementScrollPosition = elementTop + scrollPosition;
          setOffset((scrollPosition - elementScrollPosition) * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};
