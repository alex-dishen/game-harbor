import { useState, useEffect, useCallback } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('');

  const updateScrollDirection = useCallback(() => {
    let lastScrollY = window.pageYOffset;
    const scrollY = window.pageYOffset;
    const direction = scrollY > lastScrollY ? 'down' : 'up';
    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
    ) {
      setScrollDirection(direction);
    }
    lastScrollY = scrollY > 0 ? scrollY : 0;
  }, [scrollDirection]);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [updateScrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;
