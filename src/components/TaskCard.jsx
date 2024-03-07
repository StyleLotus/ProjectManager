import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/taskCard.css"; // Estilos CSS para el componente

const TaskCard = ({ task }) => {
  return (
    <li className="list-item">
      <input type="checkbox"  className="checkbox" />
      <span className="description">{task.description}</span>
        {task.status === "in-progress" ? "Completed" : "In Progress"}
    </li>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  description: PropTypes.string,
};

export default TaskCard;
