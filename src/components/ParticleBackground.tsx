import React, { useCallback, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useTheme } from "@mui/material/styles";
import type { Container } from "@tsparticles/engine";

export default function ParticleBackground() {
  const theme = useTheme();
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
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
            onClick: { enable: true, mode: "repulse" },
            onHover: { enable: true, mode: ["bubble", "grab"] },
            resize: { enable: true },
          },
          modes: {
            push: { quantity: 4 },
            // Increase duration for a sustained repulse force
            repulse: { distance: 300, duration: 1, speed: 6 },
            attract: { distance: 800, duration: 0.4, speed: 4 },
            grab: { distance: 300, links: { opacity: 0.5, blink: true } },
            bubble: {
              distance: 400,
              size: 5,
              duration: 2,
              opacity: 10,
            },
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
            type: "circle",
          },
          number: {
            value: 50,
            density: {
              enable: true,
              width: 800,
              height: 600,
            },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            // Set these to maintain momentum after repulse
            random: false,
            straight: true,
            outModes: "out",
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
