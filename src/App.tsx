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
import useCustomSmoothScroll from "./hooks/useCustomSmoothScroll";
export default function App() {
  const [theme, setTheme] = useState(() => {
    const darkMode = localStorage.getItem("darkMode");
    return darkMode === "true" ? darkTheme : lightTheme;
  });
  useCustomSmoothScroll();

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
