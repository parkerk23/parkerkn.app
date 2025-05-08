const ProfilePicture = () => {
  React.useEffect(() => {
    const profilePic = document.getElementById('profilePic');
    if (profilePic) {
      profilePic.style.opacity = '0';
      profilePic.style.transform = 'scale(0.8)';
      setTimeout(() => {
        profilePic.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        profilePic.style.opacity = '1';
        profilePic.style.transform = 'scale(1)';
      }, 100);
    }
  }, []);

  return (
    <div className="profile-picture-container">
      <img 
        src="placeholder-profile.jpg" 
        alt="Your Name" 
        id="profilePic" 
        className="profile-picture"
      />
    </div>
  );
};
