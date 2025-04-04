import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", groups: ["Frontend"] },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", groups: ["Backend"] },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", groups: ["Frontend", "Backend"] },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", groups: ["Backend", "DevOps"] },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", groups: ["DevOps"] },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", groups: ["Cloud"] },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", groups: ["Backend", "DevOps"] },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", groups: ["Frontend", "Backend", "DevOps"] },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", groups: ["Frontend"] },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", groups: ["Backend"] },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", groups: ["DevOps"] },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", groups: ["DevOps"] },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", groups: ["DevOps"] },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", groups: ["Backend"] },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", groups: ["DevOps"] },
  { name: "Deno", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg", groups: ["Backend"] },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", groups: ["Frontend", "Backend"] },
  { name: "Shell Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", groups: ["DevOps"] },
  { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", groups: ["Frontend", "Backend"] },
  { name: "Podman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg", groups: ["DevOps"] },
];

const groups = ["Frontend", "Backend", "DevOps", "Cloud"];

function SkillIcon({ skill, index }) {
  const controls = useAnimation();

  useEffect(() => {
    // Animate on mount with staggered delay
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.4 },
    });
  }, [controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileHover={{
        y: -10,
        scale: 1.1,
        transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
      }}
      onHoverEnd={() => {
        // Animate back immediately (no delay)
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
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <Box component="section" sx={{ py: 10, px: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
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
          {groups.map((group) => (
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                {group}
              </Typography>
              <Box key={group} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 4,
                p: 2,
                borderRadius: 2,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.027)"
              }}>
                <Grid container spacing={4}>
                  {skills.filter((skill) => skill.groups.includes(group)).map((skill, index) => (
                    <Grid key={skill.name}>
                      <SkillIcon skill={skill} index={index} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
}