import PropTypes from "prop-types";

//Styles Added

import "../styles/projectCard.css";

import "../styles/projectCard.css";

export default function ProjectCard({ project, onClick, onDoubleClick }) {

  function getInitials(name){
    const words = name.split(' ');
    const initials = [];
    words.forEach(word =>{
      if(word.length > 0){initials.push(word[0].toUpperCase())}
    })

    return initials.join('');
  }

  return (
    <div onClick={onClick} onDoubleClick={onDoubleClick}>
      <div className="square" style={{backgroundColor : project.color}}>
        <p className="content">{getInitials(project.name)}</p>
      </div>
      <h2 className="title">{project.name}</h2>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired
};
