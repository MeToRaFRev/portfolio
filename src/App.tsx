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
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedPreference = localStorage.getItem("darkMode");
  
    // If user has a saved preference
    if (savedPreference !== null) {
      return savedPreference === "true" ? darkTheme : lightTheme;
    }
  
    // Fallback to system preference
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode ? darkTheme : lightTheme;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar theme={theme} setTheme={setTheme} />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <ParticleBackground />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
}
