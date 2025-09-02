import React from 'react';

const Footer = () => {
  // Try to get the last commit date from environment variable (set during build)
  // Fall back to current date if not available
  const lastCommitDate = import.meta.env.VITE_LAST_COMMIT_DATE;
  
  const lastUpdated = lastCommitDate 
    ? new Date(lastCommitDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Toronto'
      })
    : new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Toronto'
      });

  return (
    <footer className="footer">
      <p>Made by Darsh • Accurate as of Aug 21, 2025</p>
    </footer>
  );
};

export default Footer;
