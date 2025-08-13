import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Harshika Dahiya</h1>
        <p>Frontend Developer | React Enthusiast</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#feedback">Feedback</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi! I’m Harshika, a passionate and detail-oriented frontend developer with a strong
          interest in building clean, responsive, and user-friendly web applications. My core skills
          include HTML, CSS, JavaScript, and React, and I enjoy creating projects that combine
          functionality with beautiful design.
        </p>
        <p>
          Beyond coding, I’m a curious learner who loves exploring new technologies, improving UI/UX
          designs, and keeping up with the latest trends in web development. I believe in writing
          maintainable code and creating applications that are accessible to everyone.
        </p>
        <p>
          When I’m not coding, you can usually find me reading about tech innovations, working on
          side projects, or brainstorming creative design ideas for my next project.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio to showcase my work and skills.</p>
          </div>
          <div className="project-card">
            <h3>To-Do List App</h3>
            <p>A React app to manage daily tasks.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: harshika@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername">My GitHub</a></p>
      </section>

      {/* Feedback Section */}
      <section id="feedback">
        <h2>Feedback on Zenmonk Internship</h2>
        <p>
          I am grateful for the opportunity to be a part of the Zenmonk Internship Training Program. 
          The structured learning path, practical hands-on tasks, and mentorship have significantly 
          strengthened my skills in React and JavaScript. I truly appreciate the guidance and 
          support provided throughout the journey. This experience has not only improved my technical
          expertise but also boosted my confidence in handling real-world projects.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Harshika Dahiya | All rights reserved</p>
      </footer>
    </div>
  )
}

export default App

