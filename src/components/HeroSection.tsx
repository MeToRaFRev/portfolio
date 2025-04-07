import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { ArrowDown } from "lucide-react";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import scroll from "../utils/scroll";
import avielImage from "../assets/images/aviel.png";
import { useWindowHeight } from "../hooks/useWindowSize";

// Create motion-enabled versions of MUI components
const MotionBox = motion.create(Box);

export default function HeroSection() {
  const arrowControls = useAnimation();
  const [arrowExpanded, setArrowExpanded] = useState(false);
  const windowHeight = useWindowHeight();
  useEffect(() => {
    if (!arrowExpanded) {
      arrowControls.start({
        y: 10,
        transition: {
          type: "spring",
          stiffness: 100, // Increase for a snappier bounce
          damping: 10, // Increase for a softer bounce
          repeat: Infinity,
          repeatType: "mirror",
        },
      });
    }
  }, [arrowControls, arrowExpanded]);

  const handleArrowClick = async () => {
    // Disable custom scroll while we perform our animation
    arrowControls.stop();
    // Calculate how much vertical space is left below the arrow
    const arrowElement = document.getElementById("hero-arrow");
    const arrowRect = arrowElement?.getBoundingClientRect();
    const maxAvailableOffset =
      window.innerHeight - (arrowRect?.bottom ?? 0) - 40;

    // Use the minimum between 35vh and available space
    const yOffset = Math.min(window.innerHeight * 0.35, maxAvailableOffset);

    if (!arrowExpanded) {
      // First click: animate arrow down and rotate it
      setTimeout(async () => {
        await scroll(window.innerHeight - 75, 1000);
      }, 600); // Adjust the delay as needed

      await arrowControls.start({
        y: yOffset,
        transition: { duration: 1 },
      });
      // Programmatically scroll down (adjust target as needed)
      await arrowControls.start({
        rotate: 180,
        transition: { duration: 0.5 },
      });
      setArrowExpanded(true);
    } else {
      await arrowControls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5 },
      });
      setTimeout(async () => {
        await scroll(0, 1000);
      }, 100); // Adjust the delay as needed
      await arrowControls.start({
        y: 0,
        transition: { duration: 0.5 },
      });
      await arrowControls.start({
        rotate: 0,
        transition: { duration: 0.5 },
      });

      // Programmatically scroll up back to top (or desired position)
      setArrowExpanded(false);
      // Resume idle bouncing
      arrowControls.start({
        y: [0, 10, 0],
        transition: { repeat: Infinity, duration: 2 },
      });
    }
  };

  return (
    <MotionBox
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
        overflow: "visible",
        px: 2,
      }}
    >
      <MotionBox
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        sx={{ textAlign: "center", maxWidth: "768px" }}
      >
        {/* Avatar Image */}
        <Box
          component="img"
          src={avielImage}
          alt="Aviel Levy"
          sx={{
            display: "block",
            margin: "0 auto",
            width: { xs: "150px", md: "200px" },
            backgroundColor: "transparent !important",
            backdropFilter: "none",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
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
            Hello, I'm
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.25rem", md: "3.75rem" },
              fontWeight: "bold",
              color: "primary.main",
              // stroke: "white",
              // strokeWidth: 1,
              mb: 3,
            }}
          >
            Aviel Levy
          </Typography>
        </Box>
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
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
        animate={arrowControls}
        onClick={handleArrowClick}
      >
        <ArrowDown width={24} height={24} color="#9CA3AF" />
      </MotionBox>
      {windowHeight !== null && windowHeight <= 900 && <Box sx={{ height: 80 }} />}
    </MotionBox>
  );
}
