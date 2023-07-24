import { RefObject, useEffect } from 'react'

const useClickOutside = (
  // Indicates whether the element is present on the page or not
  condition: boolean,
  // Ref to the object you want to hide
  ref: RefObject<HTMLElement>,
  // Action to be taken when clicked outside
  todo: () => void,
) => {
  const handleClickOutside = (e: Event) => {
    if (condition && !ref.current?.contains(e.target as HTMLElement)) {
      todo()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

export default useClickOutside
