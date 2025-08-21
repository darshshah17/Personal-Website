import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h1>Darsh Shah</h1>
      <p>
        Software Engineering Student at the University of Waterloo. <br />
        Based in Toronto, ON.
      </p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/dshah108" target="_blank" rel="noopener noreferrer" className="contact-button">linkedin</a>
        <a href="https://github.com/darshshah17" target="_blank" rel="noopener noreferrer" className="contact-button">github</a>
        <a href="mailto:darshshah1008@gmail.com" className="contact-button">email</a>
        {/* <a href="https://darshshah.ca" target="_blank" rel="noopener noreferrer" className="contact-button">website</a> */}
      </div>
    </section>
  );
};

export default About; 