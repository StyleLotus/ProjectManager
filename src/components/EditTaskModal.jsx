import PropTypes from "prop-types";

import {
  ProjectContext,
  ProjectDispatchContext,
} from "../contexts/ProjectContext";
import "../styles/modals.css";

import { useState, useContext } from "react";

export default function EditTaskModal({ task }) {
  const [description, setDescription] = useState(task ? task.description : "");
  const [dueDate, setDueDate] = useState(task ? task.dueDate : "");
  const {
    selectedProject,
    setSelectedProject,
    showEditTaskModal,
    setShowEditTaskModal,
  } = useContext(ProjectContext);

  const dispatch = useContext(ProjectDispatchContext);

  const handleEditTask = () => {
    // Verificar que todos los campos sean completados
    if (!dueDate.trim() || !description.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    dispatch({
      type: "editTask",
      projectId: selectedProject.id,
      taskId: task.id,
      task: {
        description: description,
        dueDate: dueDate,
        status: task.status,
      },
    });

    // Limpiar los campos después de agregar el Tarea
    setDueDate("");
    setDescription("");

    // Cerrar el modal
    setShowEditTaskModal(!showEditTaskModal);

    setSelectedProject(null);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <header className="modalHeader">
            <h2>Edit Task</h2>
            <button
              className="close"
              onClick={() => setShowEditTaskModal(!showEditTaskModal)}
            >
              x
            </button>
          </header>

          <textarea
            placeholder="Descripción *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="date"
            placeholder="Fecha de entrega *"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <button className="buttonAdd" onClick={handleEditTask}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

EditTaskModal.propTypes = {
  task: PropTypes.object.isRequired,
};
