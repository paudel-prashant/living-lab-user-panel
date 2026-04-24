import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from './theme'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import FeedbackWidget from './components/FeedbackWidget'

const HomePage = lazy(() => import('./pages/HomePage'))
const SurveyPage = lazy(() => import('./pages/SurveyPage'))

function AppLoadingFallback() {
  return (
    <Box sx={{ minHeight: '45vh', display: 'grid', placeItems: 'center' }}>
      <CircularProgress size={34} />
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<AppLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/survey" element={<SurveyPage />} />
          </Routes>
        </Suspense>
        <FeedbackWidget />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
