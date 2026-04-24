import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from './theme'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import FeedbackWidget from './components/FeedbackWidget'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
        <FeedbackWidget />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
