import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import EventCarouselSection from '../components/EventCarouselSection'
import AboutSection from '../components/AboutSection'
import UserPanelSection from '../components/UserPanelSection'
import FutureFeaturesSection from '../components/FutureFeaturesSection'
import FooterSection from '../components/FooterSection'

function HomePage() {
  const location = useLocation()

  useLayoutEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => window.clearTimeout(t)
  }, [location.hash, location.pathname])

  return (
    <>
      <HeroSection />
      <EventCarouselSection />
      <AboutSection />
      <UserPanelSection />
      <FutureFeaturesSection />
      <FooterSection />
    </>
  )
}

export default HomePage
