import "../styles/optionsModal.css";
import { useState } from "react";

export default function OptionModal({ onNameChange }) {
  const [newUsername, setNewUsername] = useState("");
  const [newBackgroundColor, setNewBackgroundColor] = useState("");

  const handleBackgroundColorChange = (color) => {
    // Aquí podrías llamar a una función externa para realizar cambios en el color de fondo
    onChangeBackgroundColor(color);
  };

  // Lista de colores con el formato especificado
  const colors = [
    "linear-gradient(135deg, rgba(255, 215, 0, 1), rgba(255, 165, 0, 1))",
    "linear-gradient(135deg, rgba(128, 0, 128, 1), rgba(255, 0, 255, 1))",
    "linear-gradient(135deg, rgba(255, 0, 0, 1), rgba(255, 99, 71, 1))",
    "linear-gradient(135deg, rgba(128, 128, 128, 1), rgba(169, 169, 169, 1))",
    "linear-gradient(135deg, rgba(0, 128, 0, 1), rgba(0, 255, 0, 1))",
    "linear-gradient(135deg, rgba(255, 192, 203, 1), rgba(255, 20, 147, 1))",
    "linear-gradient(135deg, rgba(0, 191, 255, 1), rgba(0, 0, 255, 1))",
    "linear-gradient(135deg, rgba(255, 215, 0, 1), rgba(255, 165, 0, 1))",
    "linear-gradient(135deg, rgba(128, 0, 128, 1), rgba(255, 0, 255, 1))",
    "linear-gradient(135deg, rgba(255, 0, 0, 1), rgba(255, 99, 71, 1))",
  ];

  return (
    <div className="options-box">
      <input
        type="text"
        placeholder="New User Name"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={() => onNameChange(newUsername)}>Change User Name</button>
      <h5>Change Background Color</h5>
      <div className="color-options">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{ background: color }}
            onClick={() => handleBackgroundColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
}
