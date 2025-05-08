const Experience = ({ active }) => {
  return (
    <section id="experience" className={`content-section ${active ? 'active-section' : ''}`}>
      <h2>Experience</h2>
      <div className="job">
        <h3>[Job Title] - [Company Name]</h3>
        <p className="date">[Month Year] – [Month Year] / Present</p>
        <ul>
          <li>Responsibility or achievement 1.</li>
          <li>Responsibility or achievement 2.</li>
          <li>Developed and maintained web applications using technologies like Node.js, React, and MongoDB.</li>
        </ul>
      </div>
      <div className="job">
        <h3>[Previous Job Title] - [Previous Company Name]</h3>
        <p className="date">[Month Year] – [Month Year]</p>
        <ul>
          <li>Responsibility or achievement 1.</li>
          <li>Responsibility or achievement 2.</li>
        </ul>
      </div>
    </section>
  );
};

