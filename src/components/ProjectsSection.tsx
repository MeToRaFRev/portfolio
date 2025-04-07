import { useMemo, useState,memo } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Box,
  Typography,
  Grid,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/Project";

function ProjectsSection() {
  //   const [projects, setProjects] = useState([]);
  //setIsLoading
  const [isLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const projects: Project[] = useMemo(() => {
    return [
      {
        title: "Clarifield",
        description:
          "A web-based platform that act as a dictionary for fields,formats and entities in an enerprise development process",
        technologies: ["React", "Deno", "MongoDB", "LDAP"],
        preview_url: "http://localhost:3001",
        image_url:
          "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        order: 1.0,
        id: "67eedb3ddc20615c5e45595f",
        created_date: "2025-04-03T19:02:21.611000",
        updated_date: "2025-04-03T19:02:21.611000",
        created_by: "metorafrev@gmail.com",
        is_sample: false,
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, file sharing, and team communication features",
        technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
        preview_url: "http://localhost:3002",
        github_url: "https://github.com/johndoe/taskmanager",
        image_url:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        order: 2.0,
        id: "67eedb3ddc20615c5e455960",
        created_date: "2025-04-03T19:02:21.611000",
        updated_date: "2025-04-03T19:02:21.611000",
        created_by: "metorafrev@gmail.com",
        is_sample: false,
      },
      {
        title: "AI Image Generator",
        description:
          "An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning",
        technologies: ["Python", "TensorFlow", "React", "FastAPI"],
        preview_url: "http://localhost:3003",
        github_url: "https://github.com/johndoe/ai-image-gen",
        image_url:
          "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        order: 3.0,
        id: "67eedb3ddc20615c5e455961",
        created_date: "2025-04-03T19:02:21.611000",
        updated_date: "2025-04-03T19:02:21.611000",
        created_by: "metorafrev@gmail.com",
        is_sample: false,
      },
      {
        title: "Virtual Classroom",
        description:
          "A virtual classroom platform with video conferencing, interactive whiteboard, and automated attendance tracking",
        technologies: ["React", "WebRTC", "Express", "MongoDB"],
        preview_url: "http://localhost:3004",
        github_url: "https://github.com/johndoe/virtual-classroom",
        image_url:
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        order: 4.0,
        id: "67eedb3ddc20615c5e455962",
        created_date: "2025-04-03T19:02:21.611000",
        updated_date: "2025-04-03T19:02:21.611000",
        created_by: "metorafrev@gmail.com",
        is_sample: false,
      },
    ];
  }, []);
  //   React.useEffect(() => {
  //     loadProjects();
  //   }, []);

  //   const loadProjects = async () => {
  //     setIsLoading(true);
  //     try {
  //   const projectsList = await Project.list("order");
  //   setProjects(projectsList);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center",willChange: 'transform' }}
        >
          <Box
            sx={{
              backdropFilter: "blur(10px)",
              display: "flex",
              justifyContent: "center",
              // height: "5vh",
              marginBottom: "2rem",
              borderRadius: "10px",

              // backgroundColor: "rgba(255, 255, 255, 0.01)",
            }}
          >
            <Typography
              noWrap
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Featured Projects
            </Typography>
          </Box>
        </motion.div>

        {isLoading ? (
          <Grid container spacing={4} columns={2}>
            {[1, 2, 3, 4].map((i) => (
              <Grid key={i} size={1}>
                <Skeleton variant="rectangular" height={400} />
              </Grid>
            ))}
          </Grid>
        ) : isMobile ? (
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              scrollSnapType: "x mandatory",
              px: 1,
            }}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                sx={{
                  flex: "0 0 85%",
                  scrollSnapAlign: "start",
                }}
              >
                <ProjectCard project={project} compact />
              </Box>
            ))}
          </Box>
        ) : (
          <Grid container spacing={4} columns={2}>
            {projects.map((project) => (
              <Grid key={project.id} size={1}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default memo(ProjectsSection);