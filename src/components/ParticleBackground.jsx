// ParticleBackground.js
import React, { useCallback, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useTheme, darken } from "@mui/material/styles";

export default function ParticleBackground() {
  const theme = useTheme();

  const strokeColor =
    theme.palette.mode === "light"
      ? darken(theme.palette.primary.main, 0.3)
      : theme.palette.primary.main;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    })
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: theme.palette.background.default,
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "attract" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            attract: { distance: 800, duration: 2,speed: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: {
            value: theme.palette.primary.main,
          },
          shadow: {
            enable: true,
            blur: 5,
            color: theme.palette.primary.main,
          },
          shape: {
            type: "circle", stroke: {
              width: 1,
              color: strokeColor,
            },
          },
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          move: {
            enable: true,
            speed: 0.3, // slow movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
          detectRetina: true,
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -9999,
      }}
    />
  );
}
