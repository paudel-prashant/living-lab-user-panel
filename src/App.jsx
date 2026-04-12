import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from './theme'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
