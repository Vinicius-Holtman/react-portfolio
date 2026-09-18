import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ColorModeContext, useMode } from "./styles/theme";
import { LanguageProvider } from "./i18n";

function App() {
  const { theme, colorMode } = useMode();

  return (
    <LanguageProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              minHeight: "100vh",
              width: "100%",
              backgroundColor: "background.default",
              overflowX: "hidden",
            }}
          >
            <Navbar />
            <Box component="main" sx={{ width: "100%" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/react-portfolio" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageProvider>
  );
}

export default App;
