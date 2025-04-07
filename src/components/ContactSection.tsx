import {useCallback,memo} from "react";
import { motion } from "framer-motion";
import {Box,Container,Typography,Button} from "@mui/material";
import { Mail } from "lucide-react";

const MotionBox = motion.create(Box);

function ContactSection() {
  const handleEmailClick = useCallback(() => {
    window.location.href = "mailto:avielz.levy@gmail.com";
  }, []);
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 10,
        px: 2,
        backdropFilter: "blur(10px)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #bebebe9f, transparent)",
          zIndex: 1,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: "text.secondary", mb: 6 }}
          >
            I'm always open to new opportunities and interesting projects
          </Typography>

          <MotionBox
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              willChange: 'transform',
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
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textTransform: "none",
                }}
                onClick={handleEmailClick}>
                <Mail size={20} />
                Email Me
              </Button>
            </MotionBox>
            <MotionBox
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            ></MotionBox>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default memo(ContactSection);