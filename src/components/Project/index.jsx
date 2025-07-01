import { useState } from "react";

// Components
import Card from "../Card";
import FilterBar from "../FilterBar";
// Styles
import "./Project.scss";

function ProjectList({ projects = [] }) {
  const [selectedType, setSelectedType] = useState("Tous");

  const filtered = projects.filter((p) =>
    selectedType === "Tous" ? true : p.type === selectedType
  );

  return (
    <section id="projects" className="project-section">
      <h2>Mes projets</h2>
      <hr className="underline--white"/>
      <FilterBar selectedFilter={selectedType} onSelect={setSelectedType} />
      <div className="project-grid">
        {filtered.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
