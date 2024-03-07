import { createContext, useReducer, useState } from "react";
import PropTypes from "prop-types";

export const ProjectContext = createContext(null);
export const ProjectDispatchContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projects, dispatch] = useReducer(tasksDispatch, []);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [nextId, setNextId] = useState(0);

  return (
    <ProjectContext.Provider
      value={{
        showTaskModal,
        setShowTaskModal,
        showProjectModal,
        setShowProjectModal,
        projects,
        selectedProject,
        setSelectedProject,
        nextId,
        setNextId,
      }}
    >
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectContext.Provider>
  );
}

function tasksDispatch(projects, action) {
  switch (action.type) {
    case "added": {
      const newProject = [
        ...projects,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          color: action.color,
          tasks: [],
        },
      ];
      return newProject;
    }
    case "addTask":{
      const updatedProjects = projects.map((project) =>{
        if(project.id === action.projectId){
          return {
              ...project,
              tasks: [...project.tasks, action.task],
          };
        }else{
          return project;
        }
      })
      return updatedProjects
    }
    default :
      return projects
  }
 
}

ProjectProvider.propTypes = {
  children: PropTypes.any,
};
