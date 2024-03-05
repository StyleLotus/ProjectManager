import "../styles/modals.css";

import { useState } from "react";

export default function ProjectModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff"); // Valor inicial blanco
  const [dueDate, setDueDate] = useState("");

  const handleAddProject = () => {
    // Verificar que todos los campos sean completados
    if (!name.trim() || !description.trim() || !dueDate.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Llamar a la función de agregar proyecto pasando los datos

    // Limpiar los campos después de agregar el proyecto
    setName("");
    setDescription("");
    setColor("#ffffff");
    setDueDate("");

    // Cerrar el modal
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <header className="modalHeader">
            <h2>Agregar Proyecto</h2>
            <button className="close">x</button>

          </header>
          <input
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
          <input
            type="date"
            placeholder="Fecha de entrega *"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <button className="buttonAdd" onClick={handleAddProject}>
            Agregar Proyecto
          </button>
        </div>
      </div>
    </>
  );
}
