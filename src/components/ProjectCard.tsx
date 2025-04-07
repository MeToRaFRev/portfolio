import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { ExternalLink } from "lucide-react";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project,compact }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.027)",
          // p: 2,
        }}
      >
        <Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            overflow: "hidden",
            transition: "all 0.3s",
            "&:hover": {
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
            backgroundColor: "transparent",
          }}
        >
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "16/9",
            }}
          >
            <Box
              component="img"
              src={project.image_url}
              alt={project.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.3s",
                opacity: isHovered ? 1 : 0,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#2e2e2e",
                  color: "#ffffff",
                  "&:hover": { backgroundColor: "#2e2e2ed8" },
                  textTransform: "none",
                }}
                onClick={() => window.open(project.preview_url, "_blank")}
              >
                <ExternalLink size={16} />
                View Live
              </Button>
            </Box>
          </motion.div>

          <CardContent sx={{ p: compact ? 2 : 3 }}>
            <Typography
              variant={compact ? "h6" : "h5"}
              component="h3"
              gutterBottom
            >
              {project.title}
            </Typography>

            {!compact && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {project.description}
              </Typography>
            )}

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mb: compact ? 1 : 2,
              }}
            >
              {(compact
                ? project.technologies.slice(0, 2)
                : project.technologies
              ).map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{ fontSize: compact ? "0.7rem" : undefined }}
                />
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="text"
                size={compact ? "small" : "medium"}
                sx={{
                  gap: 1,
                  textTransform: "none",
                }}
                onClick={() => window.open(project.preview_url, "_blank")}
              >
                <ExternalLink size={14} />
                Live
              </Button>

              {project.github_url && (
                <Button
                  variant="text"
                  size={compact ? "small" : "medium"}
                  sx={{
                    gap: 1,
                    textTransform: "none",
                  }}
                  onClick={() => window.open(project.github_url, "_blank")}
                >
                  <Github width={14} height={14} />
                  Code
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
}
