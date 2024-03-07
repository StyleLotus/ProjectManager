// Importacion de componentes necesarios
import SearchBar from "./SearchBar";
import ProjectModal from "./ProjectModal";
import TaskModal from "./TaskModal";
import TaskCard from "./TaskCard";
import ProjectCard from "./ProjectCard";
import {
  ProjectContext,
  ProjectDispatchContext,
} from "../contexts/ProjectContext";

// Importacion de los estilos

import "../styles/projectPanel.css";

// Icons FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

export default function ProjectsPanel() {
  const {
    showProjectModal,
    setShowProjectModal,
    showTaskModal,
    setShowTaskModal,
    projects,
    selectedProject,
    setSelectedProject,
  } = useContext(ProjectContext);

  const handleProjectModalView = () => {
    setShowProjectModal(!showProjectModal);
  };

  const handleTaskModalView = () => {
    setShowTaskModal(!showTaskModal);
  };

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
    console.log(project);
  };

  return (
    <div className="mainContainer">
      <section className="leftContainer">
        <button className="btnAll settingsBtn">
          <FontAwesomeIcon icon={faGears} />
        </button>
        <h1 className="userName">Hi! Lotus</h1>
        <p>Welcome Back to the workspace. We missed you!</p>
        <SearchBar />
        <h2>
          Projects{" "}
          <span className="numberOfProjects"> ({projects.length})</span>
        </h2>
        <div className="projectsContainer">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleSelectedProject(project)}
            />
          ))}
          <button
            className="btn addProjectBtn"
            onClick={handleProjectModalView}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {showProjectModal && <ProjectModal />}
      </section>
      <section className="taskContainer">
        {selectedProject && (
          <div>
            <h2 className="projectTitle">{selectedProject.name}</h2>
            <p className="projectDescription">{selectedProject.description}</p>
            <h3>Date</h3>
            <hr />
            <ul>
              {selectedProject.tasks.map((task, index) => {
                <TaskCard key={index} task={task} />;
              })}
            </ul>
          </div>
        )}
        {!showTaskModal && selectedProject && (
          <button className="btnAll addTaskBtn" onClick={handleTaskModalView}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
        {showTaskModal && <TaskModal />}
      </section>
    </div>
  );
}
