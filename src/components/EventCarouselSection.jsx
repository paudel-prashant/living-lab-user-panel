import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  MobileStepper,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded'
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded'

const slides = [
  {
    title: 'Multi-lingual family get-together',
    subtitle: 'Bring families together through language-friendly activities and shared experiences.',
    icon: Diversity3RoundedIcon,
    gradient:
      'linear-gradient(130deg, rgba(14,116,144,0.16), rgba(34,211,238,0.2) 55%, rgba(167,139,250,0.2))',
  },
  {
    title: 'Cultural Events',
    subtitle: 'Celebrate traditions, stories, food, and music from diverse communities.',
    icon: CelebrationRoundedIcon,
    gradient:
      'linear-gradient(130deg, rgba(124,58,237,0.18), rgba(167,139,250,0.2) 50%, rgba(224,242,254,0.65))',
  },
  {
    title: 'Finnish Language Session for Beginners',
    subtitle: 'Friendly beginner sessions to build confidence using Finnish in daily life.',
    icon: TranslateRoundedIcon,
    gradient:
      'linear-gradient(130deg, rgba(12,74,110,0.2), rgba(14,116,144,0.18) 45%, rgba(224,242,254,0.65))',
  },
]

function EventCarouselSection() {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = slides.length
  const currentSlide = slides[activeStep]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const interval = window.setInterval(() => {
      if (document.visibilityState === 'hidden') return
      setActiveStep((prev) => (prev + 1) % maxSteps)
    }, 5000)
    return () => window.clearInterval(interval)
  }, [maxSteps])

  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps)
  const handleBack = () => setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps)

  return (
    <Box
      component="section"
      id="events"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper', scrollMarginTop: { xs: 72, md: 80 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{ textAlign: 'center', mb: 1.5, fontSize: { xs: '1.65rem', md: '2rem' } }}
        >
          Upcoming Community Events
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 4, lineHeight: 1.8 }}
        >
          Discover what is happening in the Living Lab User Panel and join the activities that matter to you.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            overflow: 'hidden',
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            background: currentSlide.gradient,
            transition: 'background 450ms ease',
          }}
        >
          <Stack sx={{ p: { xs: 3, sm: 5 }, minHeight: 260, justifyContent: 'center' }} spacing={2}>
            <Box
              sx={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.8)',
                color: 'primary.dark',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
              }}
            >
              <currentSlide.icon sx={{ fontSize: 38 }} />
            </Box>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.35rem', md: '1.8rem' }, fontWeight: 700 }}>
              {currentSlide.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
              {currentSlide.subtitle}
            </Typography>
          </Stack>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              px: 2,
              py: 1.5,
              bgcolor: 'rgba(255,255,255,0.68)',
              '.MuiMobileStepper-dot': { width: 10, height: 10 },
              '.MuiMobileStepper-dotActive': { bgcolor: 'secondary.main' },
            }}
            nextButton={
              <IconButton onClick={handleNext} aria-label="Next event">
                <KeyboardArrowRightRoundedIcon />
              </IconButton>
            }
            backButton={
              <IconButton onClick={handleBack} aria-label="Previous event">
                <KeyboardArrowLeftRoundedIcon />
              </IconButton>
            }
          />
        </Paper>
      </Container>
    </Box>
  )
}

export default EventCarouselSection
