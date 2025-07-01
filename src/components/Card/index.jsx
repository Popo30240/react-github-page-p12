function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      title={`Lien vers ${project.link}`} 
    >
      <img src={project.logo} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{`Technologies utilisées: ${project.technologies}`} </p>
    </a>
  );
}

export default ProjectCard;
