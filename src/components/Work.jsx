import React from 'react';

const Work = () => {
  const workExperience = [
    {
      company: "Wealthsimple",
      role: "Software Developer Intern",
      team: "Managed Investing Team 💵",
      period: "Sept 2025 – Dec 2025",
      skills: []
    },
    {
      company: "Wat Street",
      role: "Quantitative Developer",
      team: "Algorithmic Trading 📈",
      period: "Aug 2024 – May 2025",
      skills: ["Python", "Pandas", "SciPy"]
    },
    {
      company: "Wealthsimple",
      role: "Data Science Intern",
      team: "Crypto Team 🪙",
      period: "Jan 2025 – Apr 2025",
      skills: ["Python", "Airflow", "SQL", "Snowflake", "Pandas", "Jupyter Notebook"]
    },
    {
      company: "Canadian Space Agency",
      role: "Software Engineer Intern",
      team: "Cost Estimation Team 💰",
      period: "Sept 2024 – Dec 2024",
      skills: ["Python", "Scikit-learn"]
    },
    {
      company: "ComputerTalk",
      role: "Software Developer Intern",
      team: "Reporting Platform Team 🖥️",
      period: "May 2024 – Aug 2024",
      skills: ["ASP.NET", "C#", "Angular", "Telerik"]
    }
  ];

  return (
    <section id="work">
      <h2>Experience</h2>
      <div className="work-list">
        {workExperience.map((job, index) => (
          <div key={index} className="work-item">
            <div className="work-header">
                <h3>{job.company}</h3>
                <span className="work-period">{job.period}</span>
            </div>
            <p className="work-role">{job.role}</p>
            <p className="work-team">{job.team}</p>
            <div className="work-tags">
              {job.skills.map((skill, i) => (
                <span key={i} className="work-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work; 