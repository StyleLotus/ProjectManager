// Importacion de componentes necesarios
import SearchBar from './SearchBar'

// Icons FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsPanel() {
  return (
    <div className="mainContainer">
      <button>
        <FontAwesomeIcon icon={faGears} />
      </button>
      <h1 className="userName">Hi! Lotus</h1>
      <p>Welcome Back to the workspace. We missed you!</p>
      <SearchBar />
      <h2>
        Projects <span> (13)</span>
      </h2>
      <section className="projectsContainer">
        <div>
          <button className="btn addProjectBtn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div>
          <h2 className="projectTitle">Cyber Punk Projects</h2>
          <p className="projectDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            explicabo earum, error aperiam perspiciatis sint modi neque
            perferendis ullam!
          </p>
          <h3>Date</h3>
          <hr />
          <button className="btn addTaskBtn"><FontAwesomeIcon icon={faPlus} /></button>
        </div>
      </section>
    </div>
  );
}
