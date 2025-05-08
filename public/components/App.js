const App = () => {
  const [activeSection, setActiveSection] = React.useState('about');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="container">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <Content activeSection={activeSection} />
    </div>
  );
};
