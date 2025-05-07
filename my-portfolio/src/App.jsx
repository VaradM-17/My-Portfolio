import "./App.css";

function App() {
  const name = "Varad Mule";
  const profession = "Full Stack Java Developer";
  const projects = [
    {
      title: "Emplify",
      description:
        "Emplify is a comprehensive full-stack Employee Management System developed using Spring Boot (backend), React (frontend), and Bootstrap (UI styling). It allows organizations to efficiently manage employees and departments through intuitive CRUD operations. The application ensures a smooth and responsive user experience, making workforce management seamless and effective.",
      link: "https://github.com/VaradM-17/Emplyfi.git",
    },
    {
      title: "Todooz",
      description:
        "Todooz is a simple yet effective Todo Management System built with Spring Boot for the backend and React with Tailwind CSS for the frontend. It uses ModelMapper, DTOs, and JPA to manage data efficiently. The application provides a clean, modern, and responsive UI for creating, updating, and organizing daily tasks.",
      link: "https://github.com/VaradM-17/Todooz.git",
    },
    {
      title: "Team Care",
      description:
        "Team Care is a robust full-stack Employee Management System designed to help organizations manage employee records efficiently. Built with Angular (frontend), Spring Boot and Hibernate (backend), and styled with Bootstrap, it offers advanced features like searching and sorting by name or ID. The system ensures fast and efficient access to employee data with a responsive and user-friendly interface.",
      link: "https://github.com/VaradM-17/TeamCare.git",
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>
            {name} <span className="profession">| {profession}</span>
          </h1>
          <nav className="navbar">
            <a href="#about">About Me</a>
            <a href="#projects">My Projects</a>
            <a href="#contact">Contact Me</a>
            <a
              href="https://www.linkedin.com/in/varadmule17"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked In
            </a>
            <a
              href="https://github.com/VaradM-17"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub
            </a>
          </nav>
        </div>
      </header>
      {/* About section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello. I’m {name}. I’m a {profession} passionate about building modern
          web applications. I live in India and enjoy working with technologies
          like Java, Spring Boot, React, and Angular. I’m currently focused on
          creating projects that solve real-world problems while continuously
          improving my skills.
        </p>
      </section>
      {/* Project section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Want to get in touch? Feel free to email me at{" "}
          <a href="mailto:varadmule17@gmail.com">varadmule17@gmail.com</a>
        </p>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
