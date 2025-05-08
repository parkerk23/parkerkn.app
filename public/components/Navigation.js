const Navigation = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    onSectionChange(sectionId);
    // Update URL hash without scrolling
    window.history.pushState(null, null, `#${sectionId}`);
  };

  return (
    <ul>
      {sections.map(section => (
        <li key={section.id}>
          <a 
            href={`#${section.id}`}
            className={`nav-link ${activeSection === section.id ? 'active-link' : ''}`}
            onClick={(e) => handleLinkClick(e, section.id)}
          >
            {section.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
