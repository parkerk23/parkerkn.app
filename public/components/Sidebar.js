const Sidebar = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="sidebar">
      <ProfilePicture />
      <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />
      <div className="sidebar-decoration"></div>
    </nav>
  );
};
