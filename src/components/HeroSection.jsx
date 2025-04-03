import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { ArrowDown } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../assets/icons/github.svg";

// Create motion-enabled versions of MUI components
const MotionBox = motion.create(Box);

export default function HeroSection(props) {
    const { theme, setTheme } = props;
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
                // background: "linear-gradient(to bottom, #fff, #f9fafb)",
                px: 2, // roughly 16px horizontal padding
            }}
        >
            <MotionBox
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                sx={{
                    textAlign: "center",
                    maxWidth: "768px",
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
                    Hello, I'm Aviel Levy
                </Typography>
                <ThemeSwitch theme={theme} setTheme={setTheme} />
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
                        sx={{ display: "flex", alignItems: "center", gap: 1, textTransform: "none" }}
                        onClick={() => window.open("https://linkedin.com/in/aviel-levi", "_blank")}
                    >
                        <Linkedin style={{ width: 20, height: 20 }} />
                    </IconButton>
                    <IconButton
                        variant="outlined"
                        size="large"
                        sx={{ display: "flex", alignItems: "center", gap: 1, textTransform: "none" }}
                        onClick={() => window.open("https://github.com/MeToRaFRev", "_blank")}
                    >
                        <Github style={{ width: 20, height: 20 }} />
                    </IconButton>
                </MotionBox>
            </MotionBox>

            <MotionBox
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                sx={{
                    position: "absolute",
                    bottom: "48px", // Tailwind bottom-12 equals roughly 48px
                }}
            >
                <MotionBox
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown width={24} height={24} color="#9CA3AF" />
                </MotionBox>
            </MotionBox>

            <MotionBox
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    pointerEvents: "none",
                    background:
                        `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.144) 0%, rgba(160, 140, 25, 0.1) 100%)`,
                }}
            />
        </MotionBox>
    );
}
