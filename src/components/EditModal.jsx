import "../styles/modals.css";
import {
  ProjectContext,
  ProjectDispatchContext,
} from "../contexts/ProjectContext";

import { useState, useContext } from "react";

export default function EditModal() {
  const {  selectedProject, setShowEditModal, showEditModal } =
    useContext(ProjectContext);
  const dispatch = useContext(ProjectDispatchContext);

  const [name, setName] = useState(selectedProject ? selectedProject.name : "");
  const [description, setDescription] = useState(selectedProject ? selectedProject.description : "");
  const [color, setColor] = useState(selectedProject ? selectedProject.color :"#ffd700");

  const handleEditProject = () => {
    if (!name.trim() || !description.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    dispatch({
      type: "editProject",
      projectId: selectedProject.id,
      name: name,
      description: description,
      color: color,
    });

    setName("");
    setDescription("");
    setColor("#ffffff");

    setShowEditModal(false)
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <header className="modalHeader">
            <h2>Editar Proyecto</h2>
            <button
              className="close"
              onClick={() => setShowEditModal(!showEditModal)}
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
          <button className="buttonAdd" onClick={handleEditProject}>
            Editar Proyecto
          </button>
        </div>
      </div>
    </>
  );
}
