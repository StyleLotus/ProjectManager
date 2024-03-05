import { useState } from "react";
import "../styles/taskCard.css"; // Estilos CSS para el componente

const TaskCard = () => {
  const [completed, setCompleted] = useState(true);
  const [description, setDescription] = useState("");

  return (
    <li className="list-item">
      <input type="checkbox" checked={completed} className="checkbox" />
      <span className="description">{description}</span>
      <span className={`status ${completed ? "in-progress" : "completed"}`}>
        {completed ? "In Progress" : "Completed"}
      </span>
    </li>
  );
};

export default TaskCard;
