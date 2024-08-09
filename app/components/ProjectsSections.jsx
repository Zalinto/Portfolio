"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import StartupImage from "../images/projectImages/startup.png";
// import AntearPathwayImage from "../images/projectImages/anteater-image.gif";

const projectsData = [
    {
        id: 1,
        title: "Moxy",
        description: "Created a dynamic social networking app fostering spontaneous connections among nearby users with shared interests. Discover events and trending locations for enriched experiences and enhanced interactions.",
        image: "/startup.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Anteater Pathways",
        description: "Created a course planner web app, adored by 500+ UCI students since December 2020, using ReactJS, MongoDB-powered web crawler for real-time course data, and integrated REST API endpoints for smooth data access.s",
        // image: {AntearPathwayImage},
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Zalinto/Anteater-Pathway",
        previewUrl: "https://www.anteaterpathway.com/",
    },
    {
        id: 3,
        title: "Coming soon...",
        description: "Project 3 description",
        // image: "/images/projects/3.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="Mobile"
                isSelected={tag === "Mobile"}
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
        </section>
    );
};

export default ProjectsSection;