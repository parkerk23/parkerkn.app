const Content = ({ activeSection }) => {
  return (
    <main className="content">
      <About active={activeSection === 'about'} />
      <Experience active={activeSection === 'experience'} />
      <Education active={activeSection === 'education'} />
      <Skills active={activeSection === 'skills'} />
      <Projects active={activeSection === 'projects'} />
      <Contact active={activeSection === 'contact'} />
    </main>
  );
};
