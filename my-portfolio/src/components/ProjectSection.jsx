import React from "react";
import ProjectCard from "./ProjectCard";
import projectItem from "./data/projectItem";

const ProjectSection = () => {
  return (
    <div className="py-5" id="projects">
      <div className="container my-5">
        <h2 className="mb-5 h2-font text-center">My Projects</h2>
        <div className="row g-4">
          {projectItem.map((project) => (
            <ProjectCard
              key={project.id}
              projectImage={project.projectImage}
              projectName={project.projectTitle}
              projectDescription={project.projectDescription}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
