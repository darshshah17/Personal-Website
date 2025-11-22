import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "Stratego",
      date: "Aug 2025",
      tags: ["C++", "MVC", "Multithreading", "Design Patterns"],
      link: "https://github.com/KrishM123/247-raiinet"
    },
    {
      name: "Polymarket Clone",
      date: "May 2025 – Jul 2025",
      tags: ["Python", "Flask", "React", "MySQL", "TypeScript"],
      link: "https://github.com/KrishM123/348-polymarket"
    },
    {
      name: "Vibe",
      date: "Apr 2025",
      tags: ["Python", "Flask", "TensorFlow", "Spotify API", "OAuth 2.0", "React"],
      link: "https://github.com/darshshah17/vibe"
    },
    {
      name: "Wealthsimple Generations",
      date: "Apr 2025",
      tags: ["TypeScript", "React", "Python", "Node.js"],
      link: "https://github.com/mfoltak/hacksimple"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <div className="work-header">
              <h3>{project.name}</h3>
              {project.date && <span className="work-period">{project.date}</span>}
            </div>
            {project.link && project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 