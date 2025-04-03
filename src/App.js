import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./themes/darkTheme";
import lightTheme from "./themes/lightTheme";
import { CssBaseline } from "@mui/material";


export default function App() {
  const [theme, setTheme] = useState(() => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === 'true' ? darkTheme : lightTheme;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <HeroSection theme={theme} setTheme={setTheme} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
}
