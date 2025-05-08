const Contact = ({ active }) => {
  return (
    <section id="contact" className={`content-section ${active ? 'active-section' : ''}`}>
      <h2>Contact</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!</p>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a href="#" target="_blank">[Your LinkedIn Profile URL]</a></p>
      <p>GitHub: <a href="#" target="_blank">[Your GitHub Profile URL]</a></p>
    </section>
  );
};

