import { useEffect, useState } from "react";
import Card from "../Card";
import FilterBar from "../FilterBar";
import "./Project.scss";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [selectedType, setSelectedType] = useState("Tous");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const filtered = projects.filter((p) =>
    selectedType === "Tous" ? true : p.type === selectedType
  );

  return (
    <section id="projects" className="project-section">
      <h2>Mes projets</h2>
      <div className="underline" />
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
