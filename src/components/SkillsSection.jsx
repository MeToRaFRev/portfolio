import React from "react";
import {motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade"

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "A modern, component-based JavaScript library for building dynamic, high-performance user interfaces using a virtual DOM and declarative paradigms.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "A powerful JavaScript runtime built on Chrome's V8 engine, ideal for creating scalable, event-driven network applications with non-blocking I/O.",
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
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description:
      "A containerization platform that encapsulates applications and their dependencies into isolated, portable containers, streamlining deployment and scalability.",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description:
      "A comprehensive cloud computing platform offering a wide array of scalable, secure, and cost-effective services for computing, storage, and networking.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "A flexible, document-oriented NoSQL database designed for high scalability and performance when handling unstructured data.",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "A distributed version control system that efficiently tracks changes in source code, enabling robust collaboration across development teams.",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    description:
      "A lightweight Python web framework that emphasizes simplicity and flexibility, making it ideal for microservices and rapid application prototyping.",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description:
      "A minimal and flexible Node.js framework for building robust web applications and APIs, with a focus on unopinionated middleware architecture.",
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
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    description:
      "A robust, open-source operating system known for its stability, security, and adaptability across server and desktop environments.",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description:
      "A reliable, widely-used relational database management system renowned for its performance, scalability, and structured query language (SQL) support.",
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    description:
      "An automation server that facilitates continuous integration and continuous delivery (CI/CD), streamlining the software build, test, and deployment processes.",
  },
  {
    name: "Deno",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
    description:
      "A secure runtime for JavaScript and TypeScript that modernizes development with built-in TypeScript support, enhanced security, and simplified module management.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "A dynamic, multi-paradigm programming language that forms the backbone of modern web development and interactive user experiences.",
  },
  {
    name: "Shell Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    description:
      "A scripting language for automating command line tasks and streamlining workflows in Unix-like environments, enhancing productivity and system management.",
  },
  {
    name: "Socket.IO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    description:
      "A real-time communication library that enables bidirectional event-based communication between clients and servers, ideal for interactive applications.",
  },
  {
    name: "Podman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
    description:
      "A daemonless container engine that provides a secure and efficient alternative for building, running, and managing OCI containers.",
  },
];


function SkillIcon({ skill, index }) {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const handleIconHover = () => {
    setTooltipOpen((prev) => !prev);
  };

  return (
    <Tooltip
      title={
        <Typography variant="body2" color="inherit">
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
          }
        },
        arrow: {
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.027)",
          }
        }
      }}
      // arrow
      placement="bottom"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        whileHover={{
          y: -10,
          scale: 1.1,
          transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
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
          }}>
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
        }}
      >
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
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid key={skill.name} item>
                <SkillIcon skill={skill} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
