import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/taskCard.css"; // Estilos CSS para el componente

const TaskCard = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    const newStatus = isChecked ? "in-progress" : "completed";
    task.status = newStatus;
  };

  return (
    <li className="list-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      <span className="description">{task.description}</span>
      <span className={`status ${task.status}`}>
        {task.status === "in-progress" ? "In Progress" : "Completed"}
      </span>
    </li>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
