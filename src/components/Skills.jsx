import React from 'react';

const Skills = () => {
  const skills = {
    Languages: ["Python", "C++", "C", "JavaScript", "TypeScript", "C#", "SQL"],
    Frameworks: ["Flask", "Django", "FastAPI", "React.js", "Node.js", "Angular", "ASP.NET", "MongoDB", "NumPy", "TensorFlow"],
    Tools: ["Git", "AWS", "Azure", "Docker", "Snowflake", "GraphQL", "PostgreSQL", "MySQL", "Postman", "Airflow", "Bash", "DBT", "Figma", "Jupyter Notebook"]
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