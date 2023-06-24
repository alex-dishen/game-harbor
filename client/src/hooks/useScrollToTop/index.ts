import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 380)
  }, [pathname])

  return null
}

export default useScrollToTop
