import { CssBaseline, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { ColorModeContext, useMode } from './styles/theme'
import { Projects } from './pages/Projects'

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <main className='content'>
            <Routes>
              <Route path="/react-portfolio" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
