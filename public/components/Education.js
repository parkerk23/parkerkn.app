const Education = ({ active }) => {
  return (
    <section id="education" className={`content-section ${active ? 'active-section' : ''}`}>
      <h2>Education</h2>
      <div className="education-item">
        <h3>[Your Degree] - [Major]</h3>
        <p>[University Name], [City, State]</p>
        <p className="date">Graduated: [Month Year]</p>
        <p>Relevant coursework: [Course 1], [Course 2]</p>
      </div>
    </section>
  );
};
