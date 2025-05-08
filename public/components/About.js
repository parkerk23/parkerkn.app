const About = ({ active }) => {
  return (
    <section id="about" className={`content-section ${active ? 'active-section' : ''}`}>
      <h2>About Me</h2>
      <p>Hello! I'm [Your Name], a passionate [Your Profession/Field] based in [Your Location]. I have a strong interest in [mention a key interest or two related to your field]. I enjoy creating intuitive and dynamic user experiences.</p>
      <p>When I'm not coding/working, you can find me [mention a hobby or two].</p>
    </section>
  );
};

