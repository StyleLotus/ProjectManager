import { createContext, useReducer, useState } from "react";
import PropTypes from "prop-types";

export const ProjectContext = createContext(null);
export const ProjectDispatchContext = createContext(null);
export const BackgroundColorContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projects, dispatch] = useReducer(tasksDispatch, []);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [nextId, setNextId] = useState(0);
  const [nextTaskId, setNextTaskId] = useState(0);
  const [visible, setVisible] = useState(false);
  const [doubleClickX, setDoubleClickX] = useState(null);
  const [doubleClickY, setDoubleClickY] = useState(null);
  const [editingActive, setEditingActive] = useState(false);
  const [filteredData, setFilteredData] = useState(projects);

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
        visible,
        setVisible,
        doubleClickX,
        setDoubleClickX,
        doubleClickY,
        setDoubleClickY,
        editingActive,
        setEditingActive,
        showEditModal,
        setShowEditModal,
        filteredData,
        setFilteredData,
        nextTaskId,
        setNextTaskId,
        showEditTaskModal,
        setShowEditTaskModal,
        setSelectedTask,
        selectedTask,
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
    case "addTask": {
      const updatedProjects = projects.map((project) => {
        if (project.id === action.projectId) {
          return {
            ...project,
            tasks: [...project.tasks, action.task],
          };
        } else {
          return project;
        }
      });
      return updatedProjects;
    }
    case "deleteProject": {
      const updatedProjects = projects.filter(
        (project) => project.id !== action.projectId
      );

      return updatedProjects;
    }
    case "editProject": {
      const updatedProjects = projects.map((project) => {
        if (project.id === action.projectId) {
          return {
            ...project,
            name: action.name,
            description: action.description,
            color: action.color,
          };
        } else {
          return project;
        }
      });
      return updatedProjects;
    }
    case "deleteTask": {
      const updatedProjects = projects.map((project) => {
        if (project.id === action.projectId) {
          const updatedTasks = project.tasks.filter(
            (task) => task.id !== action.taskId
          );
          return {
            ...project,
            tasks: updatedTasks,
          };
        } else return project;
      });
      return updatedProjects;
    }
    case "editTask": {
      const updatedProjects = projects.map((project) => {
        if (project.id === action.projectId) {
          const updatedTasks = project.tasks.map((task) => {
            if (task.id === action.taskId) {
              return {
                ...task,
                description: action.task.description,
                dueDate: action.task.dueDate,
                status: action.task.status,
              };
            }
            return task;
          });
          return {
            ...project,
            tasks: updatedTasks,
          };
        }
        return project;
      });
      return updatedProjects;
    }
    default:
      return projects;
  }
}

ProjectProvider.propTypes = {
  children: PropTypes.any,
};
