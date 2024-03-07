import { ProjectContext, ProjectDispatchContext } from "../contexts/ProjectContext";
import "../styles/modals.css";

import { useState, useContext } from "react";

export default function TaskModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const {
    showTaskModal,
    setShowTaskModal,
    selectedProject,
    setSelectedProject,
  } = useContext(ProjectContext);

  const dispatch = useContext(ProjectDispatchContext)

  const handleAddTask = () => {
    // Verificar que todos los campos sean completados
    if (!name.trim() || !dueDate.trim() || !description.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Llamar a la función de agregar Tarea pasando los datos

    dispatch({
      type: 'addTask',
      projectId: selectedProject.id,
      name: name,
      description: description,
      dueDate: dueDate
    })

    // Limpiar los campos después de agregar el Tarea
    setName("");
    setDueDate("");
    setDescription("");

    // Cerrar el modal
    setShowTaskModal(!showTaskModal);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <header className="modalHeader">
            <h2>Agregar Tarea</h2>
            <button
              className="close"
              onClick={() => setShowTaskModal(!showTaskModal)}
            >
              x
            </button>
          </header>
          <input
            className="nameInput"
            type="text"
            placeholder="Nombre *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
          <button className="buttonAdd" onClick={handleAddTask}>
            Agregar Tarea
          </button>
        </div>
      </div>
    </>
  );
}
