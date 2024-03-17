import { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  ProjectDispatchContext,
  ProjectContext,
} from "../contexts/ProjectContext";
import "../styles/taskCard.css";

const TaskCard = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useContext(ProjectDispatchContext);
  const { selectedProject, setSelectedProject } = useContext(ProjectContext);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    const newStatus = isChecked ? "in-progress" : "completed";
    task.status = newStatus;
  };

  const handleDeleteTask = () => {
    dispatch({
      type: "deleteTask",
      projectId : selectedProject.id,
      taskId: task.id
    })
    setSelectedProject(null)
  };

  const handleEditTask = () => {};
    dispatch({
      type: 'editTask',
      projectId: selectedProject.id,
      
    })
    setSelectedProject(null)
  return (
    <li
      className="list-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      <span className="description">{task.description}</span>
      <div>
        <span className={`status ${task.status}`}>
          {task.status === "in-progress" ? "In Progress" : "Completed"}
        </span>
        {isHovered && (
          <div className="edit-delete-buttons">
            <button className="edit-task-button">Edit</button>
            <button className="delete-task-button" onClick={handleDeleteTask}>Delete</button>
          </div>
        )}
      </div>
    </li>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
