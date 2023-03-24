import { useState, useEffect, RefObject } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export function useClickOutside(
  // Indicates whether the element is present on the page or not
  condition: boolean,
  // Ref to the object you want to hide
  ref: RefObject<HTMLElement>,
  // Action to be taken when clicked outside
  todo: () => void
) {
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (condition && !ref.current?.contains(e.target as HTMLElement)) {
        todo();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
