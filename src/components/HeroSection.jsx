import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { ArrowDown } from "lucide-react";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import useCustomSmoothScroll from "../hooks/useCustomSmoothScroll"; // adjust path as needed

// Create motion-enabled versions of MUI components
const MotionBox = motion.create(Box);

export default function HeroSection() {
  const arrowControls = useAnimation();
  const [arrowExpanded, setArrowExpanded] = useState(false);
  const { disableCustomScroll, enableCustomScroll,scrollToPosition } = useCustomSmoothScroll();

  useEffect(() => {
    if (!arrowExpanded) {
      arrowControls.start({
        y: [0, 10, 0],
        transition: { repeat: Infinity, duration: 2 },
      });
    }
  }, [arrowControls, arrowExpanded]);

  const handleArrowClick = async () => {
    // Disable custom scroll while we perform our animation
    disableCustomScroll();
    arrowControls.stop();

    if (!arrowExpanded) {
      // First click: animate arrow down and rotate it
      await arrowControls.start({
        y: "44vh", // adjust as needed
        transition: { duration: 1 },
      });
      // Programmatically scroll down (adjust target as needed)
      await scrollToPosition(window.innerHeight-75, 1000);
      await arrowControls.start({
        rotate: 180,
        transition: { duration: 0.5 },
      });
      setArrowExpanded(true);
    } else {
      // Second click: shiver then shoot up
      await arrowControls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5 },
      });
      await arrowControls.start({
        y: 0,
        rotate: 0,
        transition: { duration: 0.5 },
      });
      // Programmatically scroll up back to top (or desired position)
      await scrollToPosition(0, 1000);
      setArrowExpanded(false);
      // Resume idle bouncing
      arrowControls.start({
        y: [0, 10, 0],
        transition: { repeat: Infinity, duration: 2 },
      });
    }
    // Re-enable custom scroll and update its target position
    enableCustomScroll();
  };

  return (
    <MotionBox
      component="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        px: 2,
      }}
    >
      <MotionBox
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        sx={{ textAlign: "center", maxWidth: "768px" }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2.25rem", md: "3.75rem" },
            fontWeight: "bold",
            color: "text.primary",
            mb: 3,
          }}
        >
          Hello, I'm Aviel Levy
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "text.secondary",
            mb: 4,
          }}
        >
          Full Stack Developer crafting elegant digital experiences
        </Typography>
        <MotionBox
          component="p"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          sx={{
            fontSize: "1rem",
            color: "text.secondary",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            variant="outlined"
            size="large"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
            }}
            onClick={() =>
              window.open("https://linkedin.com/in/aviel-levi", "_blank")
            }
          >
            <Linkedin style={{ width: 20, height: 20 }} />
          </IconButton>
          <IconButton
            variant="outlined"
            size="large"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
            }}
            onClick={() =>
              window.open("https://github.com/MeToRaFRev", "_blank")
            }
          >
            <Github style={{ width: 20, height: 20 }} />
          </IconButton>
        </MotionBox>
      </MotionBox>

      <MotionBox
        sx={{
          position: "absolute",
          bottom: "40vh",
          cursor: "pointer",
        }}
        animate={arrowControls}
        onClick={handleArrowClick}
      >
        <ArrowDown width={24} height={24} color="#9CA3AF" />
      </MotionBox>
    </MotionBox>
  );
}
