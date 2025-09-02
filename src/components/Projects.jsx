import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "Wealthsimple Generations",
      description: "A long-term wealth management platform for high-value clients (Hackathon Winner).",
      tags: ["React", "Node.js", "Python", "TensorFlow", "SQL"],
      link: "https://github.com/mfoltak/hacksimple" // Update with actual project link
    },
    {
      name: "Vibe",
      description: "An audio-based mood detection platform that provides AI-powered music recommendations.",
      tags: ["Python", "React", "Flask", "TensorFlow", "Spotify API", "OAuth 2.0"],
      link: "https://github.com/darshshah17/vibe" // Update with actual project link
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="work-header">
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 