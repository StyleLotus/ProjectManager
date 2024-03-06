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
import { useContext } from "react";

export default function ProjectsPanel() {
  const { showProjectModal, setShowProjectModal } = useContext(ProjectContext);

  const handleProjectModalView = () =>{
    setShowProjectModal(!showProjectModal);
  }

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
          Projects <span className="numberOfProjects"> (13)</span>
        </h2>
        <div className="projectsContainer">
          <ProjectCard></ProjectCard>
          <button className="btn addProjectBtn" onClick={handleProjectModalView}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {showProjectModal && < ProjectModal />}
      </section>
      <section className="taskContainer">
        <div>
          <h2 className="projectTitle">Cyber Punk Projects</h2>
          <p className="projectDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            explicabo earum, error aperiam perspiciatis sint modi neque
            perferendis ullam!
          </p>
          <h3>Date</h3>
          <hr />
          <ul>
            <TaskCard />
          </ul>
          <button className="btnAll addTaskBtn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {/* <TaskModal /> */}
      </section>
    </div>
  );
}
