const Skills = ({ active }) => {
  const skills = [
    'JavaScript', 'Node.js', 'Express.js', 'React', 'HTML5', 
    'CSS3', 'MongoDB', 'Git', 'REST APIs', 'Agile Methodology'
  ];

return (
    <section id="skills" className={`content-section ${active ? 'active-section' : ''}`}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

