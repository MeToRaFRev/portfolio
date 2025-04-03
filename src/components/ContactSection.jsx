import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Mail } from "lucide-react";

// Create a motion-enabled Box for convenience
const MotionBox = motion(Box);

export default function ContactSection() {
    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: 10, // roughly 80px vertical padding
                px: 2,  // roughly 16px horizontal padding
                // backgroundColor: "white",
            }}
        >
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 4 }}>
                        Let's Connect
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ color: "text.secondary", mb: 6 }}>
                        I'm always open to new opportunities and interesting projects
                    </Typography>

                    <MotionBox
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 2,
                        }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <MotionBox
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 },
                            }}
                        >
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{ display: "flex", alignItems: "center", gap: 1,textTransform:"none" }}
                                onClick={() => (window.location.href = "mailto:avielz.levy@gmail.com")}
                            >
                                <Mail size={20} />
                                Email Me
                            </Button>
                        </MotionBox>
                        <MotionBox
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 },
                            }}
                        >
                        </MotionBox>
                    </MotionBox>
                </MotionBox>
            </Container>
        </Box>
    );
}
