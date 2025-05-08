// Initialize the React app
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(<App />);

  // Handle initial hash in URL
  if (window.location.hash) {
    const initialSection = window.location.hash.substring(1);
    // We'll handle this via the App component's state
  }
});
