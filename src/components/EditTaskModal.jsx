import { useState, useContext } from "react";
import { ProjectDispatchContext } from "../contexts/ProjectContext";
import PropTypes from "prop-types";

const EditTaskModal = ({ task }) => {
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useContext(ProjectDispatchContext);

  const handleEditTask = () => {
    dispatch({
      type: "editTask",
      projectId: task.projectId,
      taskId: task.id,
      description: newDescription,
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          x
        </span>
        <h2>Edit Task</h2>
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={handleEditTask}>Save Changes</button>
      </div>
    </div>
  );
};

EditTaskModal.propTypes = {
  task: PropTypes.object.isRequired,
};

export default EditTaskModal;
