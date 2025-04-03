import React from "react";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";


import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    //   const [projects, setProjects] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const projects = React.useMemo(() => {
        return [
            {
                "title": "Clarifield",
                "description": "A web-based platform that act as a dictionary for fields,formats and entities in an enerprise development process",
                "technologies": [
                    "React",
                    "Deno",
                    "MongoDB",
                    "LDAP",
                ],
                "preview_url": "http://localhost:3001",
                "image_url": "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "order": 1.0,
                "id": "67eedb3ddc20615c5e45595f",
                "created_date": "2025-04-03T19:02:21.611000",
                "updated_date": "2025-04-03T19:02:21.611000",
                "created_by": "metorafrev@gmail.com",
                "is_sample": false
            },
            {
                "title": "Task Management App",
                "description": "A collaborative task management application with real-time updates, file sharing, and team communication features",
                "technologies": [
                    "React",
                    "Firebase",
                    "Material-UI",
                    "WebSocket"
                ],
                "preview_url": "http://localhost:3002",
                "github_url": "https://github.com/johndoe/taskmanager",
                "image_url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "order": 2.0,
                "id": "67eedb3ddc20615c5e455960",
                "created_date": "2025-04-03T19:02:21.611000",
                "updated_date": "2025-04-03T19:02:21.611000",
                "created_by": "metorafrev@gmail.com",
                "is_sample": false
            },
            {
                "title": "AI Image Generator",
                "description": "An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning",
                "technologies": [
                    "Python",
                    "TensorFlow",
                    "React",
                    "FastAPI"
                ],
                "preview_url": "http://localhost:3003",
                "github_url": "https://github.com/johndoe/ai-image-gen",
                "image_url": "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "order": 3.0,
                "id": "67eedb3ddc20615c5e455961",
                "created_date": "2025-04-03T19:02:21.611000",
                "updated_date": "2025-04-03T19:02:21.611000",
                "created_by": "metorafrev@gmail.com",
                "is_sample": false
            },
            {
                "title": "Virtual Classroom",
                "description": "A virtual classroom platform with video conferencing, interactive whiteboard, and automated attendance tracking",
                "technologies": [
                    "React",
                    "WebRTC",
                    "Express",
                    "MongoDB"
                ],
                "preview_url": "http://localhost:3004",
                "github_url": "https://github.com/johndoe/virtual-classroom",
                "image_url": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "order": 4.0,
                "id": "67eedb3ddc20615c5e455962",
                "created_date": "2025-04-03T19:02:21.611000",
                "updated_date": "2025-04-03T19:02:21.611000",
                "created_by": "metorafrev@gmail.com",
                "is_sample": false
            }
        ]
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
                // bgcolor: "black",
                py: 10, // roughly equals Tailwind py-20 (80px)
                px: 2,  // roughly equals Tailwind px-4 (16px)
                // backgroundColor: "#F9FAFB", // Tailwind gray-50
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            mb: 8, // roughly equals Tailwind mb-16 (64px)
                        }}
                    >
                        Featured Projects
                    </Typography>
                </motion.div>

                {isLoading ? (
                    <Grid container spacing={4} columns={2}>
                        {[1, 2, 3, 4].map((i) => (
                            <Grid key={i} size={1}>
                                <Skeleton variant="rectangular" height={400} />
                            </Grid>
                        ))}
                    </Grid>
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
