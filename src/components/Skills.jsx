import React from 'react';

const Skills = () => {
  const skills = {
    Languages: ["Python", "C++", "C", "SQL", "Ruby", "JavaScript", "TypeScript", "C#"],
    "Frameworks/Libraries": ["Flask", "FastAPI", "Django", "Express", "Node.js", "Ruby on Rails", ".NET", "Pandas", "NumPy", "React", "Jest"],
    Tools: ["Git", "AWS", "Azure", "Docker", "Kubernetes", "Snowflake", "PostgreSQL", "MySQL", "GraphQL", "Redis", "Airflow"]
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-items">
              {skillList.map((skill) => (
                <span key={skill} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 