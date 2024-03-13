import { useState, useEffect, useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import PropTypes from "prop-types";
import "../styles/projectPanel.css";

const OptionsBox = ({ onDelete, onEdit, doubleClickX, doubleClickY }) => {
  const { visible, setVisible } = useContext(ProjectContext);

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => setVisible(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [visible, setVisible]);

  const handleDelete = () => {
    onDelete();
    setVisible(false);
  };
  const handleEdit = () => {
    onEdit();
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          className="optionsBox"
          style={{ top: doubleClickY, left: doubleClickX }}
        >
          <button onClick={handleEdit} className="editButton">Edit Project</button>
          <button onClick={handleDelete} className="deleteButton">Delete Project</button>
        </div>
      )}
    </>
  );
};

OptionsBox.propTypes = {
  onDelete : PropTypes.func.isRequired,
  onEdit : PropTypes.func.isRequired,
}

export default OptionsBox;
