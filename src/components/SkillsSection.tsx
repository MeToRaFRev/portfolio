import React, { JSX,useState, useCallback, useEffect } from "react";
import { IconButton,Box,Container,Typography, Grid, Tooltip, Fade } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import {RefreshCcw} from "lucide-react";


interface Skill {
  name: string;
  icon: string;
  description: string;
}

const skills: Skill[] = [
  // Core Languages
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "A dynamic, multi-paradigm programming language that forms the backbone of modern web development and interactive user experiences.",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "A statically-typed superset of JavaScript that improves code reliability and maintainability, perfect for large-scale applications.",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description:
      "A versatile, high-level programming language celebrated for its readability, vast libraries, and rapid prototyping capabilities, particularly in data science and web development.",
  },

  // Frontend
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "A modern, component-based JavaScript library for building dynamic, high-performance user interfaces using a virtual DOM and declarative paradigms.",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    description:
      "A lightweight Python web framework that emphasizes simplicity and flexibility, making it ideal for microservices and rapid application prototyping.",
  },

  // Backend
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "A powerful JavaScript runtime built on Chrome's V8 engine, ideal for creating scalable, event-driven network applications with non-blocking I/O.",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description:
      "A minimal and flexible Node.js framework for building robust web applications and APIs, with a focus on unopinionated middleware architecture.",
  },
  {
    name: "Socket.IO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    description:
      "A real-time communication library that enables bidirectional event-based communication between clients and servers, ideal for interactive applications.",
  },
  {
    name: "Deno",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
    description:
      "A secure runtime for JavaScript and TypeScript that modernizes development with built-in TypeScript support, enhanced security, and simplified module management.",
  },
  // Databases
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "A flexible, document-oriented NoSQL database designed for high scalability and performance when handling unstructured data.",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description:
      "A reliable, widely-used relational database management system renowned for its performance, scalability, and structured query language (SQL) support.",
  },

  // DevOps Tooling
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "A distributed version control system that efficiently tracks changes in source code, enabling robust collaboration across development teams.",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description:
      "A containerization platform that encapsulates applications and their dependencies into isolated, portable containers, streamlining deployment and scalability.",
  },
  {
    name: "Podman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
    description:
      "A daemonless container engine that provides a secure and efficient alternative for building, running, and managing OCI containers.",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    description:
      "An open-source system for automating the deployment, scaling, and management of containerized applications across clusters.",
  },
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    description:
      "An infrastructure as code tool that enables safe, repeatable provisioning and versioning of cloud resources, streamlining infrastructure management.",
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    description:
      "An automation server that facilitates continuous integration and continuous delivery (CI/CD), streamlining the software build, test, and deployment processes.",
  },

  // Infra
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description:
      "A comprehensive cloud computing platform offering a wide array of scalable, secure, and cost-effective services for computing, storage, and networking.",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    description:
      "A robust, open-source operating system known for its stability, security, and adaptability across server and desktop environments.",
  },
  {
    name: "Shell Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    description:
      "A scripting language for automating command line tasks and streamlining workflows in Unix-like environments, enhancing productivity and system management.",
  },
];


interface SkillIconProps {
  skill: Skill;
  index: number;
}

function SkillIcon({ skill, index }: SkillIconProps): JSX.Element {
  const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false);
  const theme = useTheme();
  const controls = useAnimation();

  const handleIconHover = useCallback(() => {
    setTooltipOpen((prev) => !prev);
  }, [setTooltipOpen]);

  const mountAnimation = useCallback(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.4 },
    });
  }, [controls, index]);

  useEffect(() => {
    // Initial mount animation with staggered delay
    mountAnimation()
  }, [mountAnimation]);

  return (
    <Tooltip
      title={
        <Typography variant="body2" color={theme.palette.text.primary}>
          {skill.description}
        </Typography>
      }
      open={tooltipOpen}
      onClose={() => setTooltipOpen(false)}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      slots={{
        transition: Fade,
      }}
      slotProps={{
        transition: {
          timeout: 300,
        },
        tooltip: {
          sx: {
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.027)",
            p: 2,
            maxWidth: 200,
          },
        },
        arrow: {
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.027)",
          },
        },
      }}
      placement="bottom"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        whileHover={{
          y: -10,
          scale: 1.1,
          transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
        }}
        // Reset hover animation immediately with no extra delay
        onHoverEnd={() => {
          controls.start({
            y: 0,
            scale: 1,
            transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
          });
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Box
          onMouseEnter={handleIconHover}
          onMouseLeave={handleIconHover}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: 64, height: 64, mb: 2 }}>
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography sx={{ color: "text.secondary", fontWeight: 500 }}>
            {skill.name}
          </Typography>
        </Box>
      </motion.div>
    </Tooltip>
  );
}

export default function SkillsSection() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleRefresh = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 600); // Stop rotation after 600ms
    setRefreshKey((prev) => prev + 1); // Change key to remount
  };

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.027)",
          p: 4,
          position: "relative",
        }}
      >
        {/* Refresh Button */}
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <motion.div
            animate={{ rotate: isRotating ? 360 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <IconButton
              size="small"
              onClick={handleRefresh}
              sx={{ color: "text.secondary" }}
            >
              <RefreshCcw />
            </IconButton>
          </motion.div>
        </Box>

        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Technologies I Work With
          </motion.div>

          <Grid container spacing={4} justifyContent="center" key={refreshKey}>
            {skills.map((skill, index) => (
              <Grid key={skill.name}>
                <SkillIcon skill={skill} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}