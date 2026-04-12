import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets window scroll on route changes so pages like /survey always open at the top.
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default ScrollToTop
