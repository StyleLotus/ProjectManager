import { createContext, useReducer, useState } from "react";
import PropTypes from "prop-types";

export const ProjectContext = createContext(null);
export const ProjectDispatchContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projects, dispatch] = useReducer(tasksDispatch, []);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  return (
    <ProjectContext.Provider
      value={{
        showTaskModal,
        setShowTaskModal,
        showProjectModal,
        setShowProjectModal,
        projects,
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
      console.log(newProject);
      return newProject;
    }
  }
}

ProjectProvider.propTypes = {
  children: PropTypes.any,
};
