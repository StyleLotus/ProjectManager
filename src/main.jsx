import React from "react";
import ReactDOM from "react-dom/client";

// import Login from './components/login'
import ProjectsPanel from "./components/ProjectsPanel";

import { ProjectProvider } from "./contexts/ProjectContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Login /> */}
    <ProjectProvider>
      
      <ProjectsPanel></ProjectsPanel>
    </ProjectProvider>
  </React.StrictMode>
);
