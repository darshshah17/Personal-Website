import React, { useState } from 'react';

const CompanyLogo = ({ company, logoUrl }) => {
  const [logoError, setLogoError] = useState(false);
  const getInitials = (name) => {
    const words = name.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  if (logoError || !logoUrl) {
    return (
      <div className="company-logo-fallback">
        {getInitials(company)}
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt={`${company} logo`} 
      className="company-logo"
      onError={() => setLogoError(true)}
    />
  );
};

const Work = () => {
  const workExperience = [
    {
      company: "Wealthsimple",
      role: "Software Engineer Intern",
      period: "Sep 2025 - Present",
      duration: "3 mos",
      team: "Managed Investing 💵",
      skills: ["TypeScript", "Ruby on Rails", "PostgreSQL", "GraphQL", "Python"],
      logo: "https://logo.clearbit.com/wealthsimple.com"
    },
    {
      company: "Wealthsimple",
      role: "Software Engineer Intern",
      period: "Jan 2025 - Apr 2025",
      duration: "4 mos",
      team: "Crypto 🪙",
      skills: ["PostgreSQL", "Apache Airflow", "Data Build Tool (DBT)", "Ruby", "Python"],
      logo: "https://logo.clearbit.com/wealthsimple.com"
    },
    {
      company: "Canadian Space Agency",
      role: "Software Engineer Intern",
      period: "Sep 2024 - Dec 2024",
      duration: "4 mos",
      team: "Cost Estimation 💰",
      skills: ["C++", "Python"],
      logo: "https://logo.clearbit.com/asc-csa.gc.ca"
    }
  ];

  return (
    <section id="work">
      <h2>Experience</h2>
      <div className="work-list">
        {workExperience.map((job, index) => (
          <div key={index} className="work-item">
            <div className="work-header-with-logo">
              <CompanyLogo company={job.company} logoUrl={job.logo} />
              <div className="work-header-content">
                <p className="work-role">{job.role}</p>
                <h3>{job.company}</h3>
                <div className="work-meta">
                  <span className="work-period">{job.period} · {job.duration}</span>
                </div>
                <p className="work-team">{job.team}</p>
              </div>
            </div>
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