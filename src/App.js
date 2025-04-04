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
import ThemeSwitch from "./components/ThemeSwitch";
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
      {<Box sx={{ position: "relative", minHeight: "100vh" }}>
        <ParticleBackground />
        <ThemeSwitch theme={theme} setTheme={setTheme} />
        <HeroSection/>
        /<SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Box>}
    </ThemeProvider>
  );
}
