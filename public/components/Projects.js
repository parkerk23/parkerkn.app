const Projects = ({ active }) => {
  return (
    <section id="projects" className={`content-section ${active ? 'active-section' : ''}`}>
      <h2>Projects</h2>
      <div className="project">
        <h3>[Project Name 1]</h3>
        <p>A brief description of your project. Highlight the technologies used and your role.</p>
        <p><strong>Technologies:</strong> [Tech 1, Tech 2, Tech 3]</p>
        <a href="#" target="_blank" className="project-link">View Project</a>
      </div>
      <div className="project">
        <h3>[Project Name 2]</h3>
        <p>Another project description. What problem did it solve? What did you learn?</p>
        <p><strong>Technologies:</strong> [Tech 1, Tech 2, Tech 3]</p>
        <a href="#" target="_blank" className="project-link">View Project</a>
      </div>
    </section>
  );
};


