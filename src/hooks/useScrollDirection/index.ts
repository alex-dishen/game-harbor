import { useState, useEffect, useCallback, useRef } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('')
  const lastScrollYRef = useRef(window.pageYOffset)

  const updateScrollDirection = useCallback(() => {
    const scrollY = window.pageYOffset
    const direction = scrollY > lastScrollYRef.current ? 'down' : 'up'
    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollYRef.current > 10 ||
        scrollY - lastScrollYRef.current < -10)
    ) {
      setScrollDirection(direction)
    }
    lastScrollYRef.current = scrollY > 0 ? scrollY : 0
  }, [scrollDirection])

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [updateScrollDirection])

  return scrollDirection
}

export default useScrollDirection
