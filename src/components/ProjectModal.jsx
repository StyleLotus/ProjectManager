import "../styles/modals.css";
import {
  ProjectContext,
  ProjectDispatchContext,
} from "../contexts/ProjectContext";

import { useState, useContext } from "react";

export default function ProjectModal() {
  const {
    showProjectModal,
    setShowProjectModal,
    nextId,
    setNextId,
  } = useContext(ProjectContext);
  const dispatch = useContext(ProjectDispatchContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffd700");

  const handleAddProject = () => {
    // Verificar que todos los campos sean completados
    if (!name.trim() || !description.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Llamar a la función de agregar proyecto pasando los datos

    dispatch({
      type: "added",
      id: nextId,
      name: name,
      description: description,
      color: color,
    });

    setNextId(nextId + 1);

    // Limpiar los campos después de agregar el proyecto
    setName("");
    setDescription("");
    setColor("#ffffff");

    // Cerrar el modal
    setShowProjectModal(!showProjectModal);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <header className="modalHeader">
            <h2>Agregar Proyecto</h2>
            <button
              className="close"
              onClick={() => setShowProjectModal(!showProjectModal)}
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
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="buttonAdd" onClick={handleAddProject}>
            Agregar Proyecto
          </button>
        </div>
      </div>
    </>
  );
}
