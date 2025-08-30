import React, { useEffect } from "react";
import "./styles.css";
import { ReactTyped } from "react-typed";
import profileImg from "./image/Praneeth.jpg";
import aboutImg from "./image/about.jpg";

function App() {
  useEffect(() => {
    // Menu toggle
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menu && navbar) {
      menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      };

      window.onscroll = () => {
        menu.classList.remove("bx-x");
        navbar.classList.remove("active");
      };
    }
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">
          Praneeth
        </a>
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-img">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="home-content">
          <h3>Hello, Welcome</h3>
          <h1>
            I’m Praneeth Ganesh – Full Stack Developer | React, Spring Boot & AI
          </h1>
          <h3>
            And I'm also a{" "}
            <ReactTyped
              className="multiple-text"
              strings={[
                "DevOps Engineer",
                "Frontend Developer",
                "Backend Developer"
              ]}
              typeSpeed={60}
              backSpeed={60}
              backDelay={1000}
              loop
              showCursor={true}
              cursorChar="|"
            />
          </h3>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/praneeth-ganesh-aa9b4b268/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/PraneethGanesh">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.instagram.com/praneeth_ganesh/">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
          <a
            href="https://www.overleaf.com/project/67a88261b3eafe5f5a56da5f"
            className="btn"
          >
            My resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>
            I'm a <span>Software Developer</span>
          </h3>
          <a href="#" className="btn" id="readMoreBtn">
            Read More
          </a>
          <div id="aboutCard" className="about-card">
            <p>
              Hi, I’m Praneeth Ganesh—a full stack developer who loves building
              modern web and mobile solutions. I specialize in{" "}
              <strong>React</strong> for engaging interfaces,{" "}
              <strong>Spring Boot</strong> for solid backend structure, and
              innovative work with <strong>AI</strong> and 3D modeling.
            </p>
            <p>
              My toolkit includes <strong>HTML, CSS, JavaScript, React, Java,
                Spring Boot,</strong> and <strong>MySQL</strong>. I constantly
              explore advanced areas such as artificial intelligence, computer
              vision, and gamification, striving to create products that are
              both practical and user-friendly.
            </p>
            <p>
              Among my favorite achievements are an AI-driven blueprint-to-3D
              model converter, a secure Employee Management System, and a
              streamlined seat booking platform.
            </p>
            <p>
              I’m a motivated learner and completed the NPTEL Problem-Solving in
              C course, continually seeking new challenges. Outside of tech, I
              enjoy long-distance running, badminton, martial arts, and chess.
            </p>
            <p>
              I welcome you to explore my work and connect for collaborations
              where technology drives genuine change. Thanks for visiting—let’s
              build something impactful together!
            </p>
          </div>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="About Me" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>AI Blueprint to 3D Model</h3>
            <p>
              Developed an AI-powered tool that transforms architectural
              blueprints into interactive 3D models using computer vision and
              deep learning.
            </p>
            <a href="#" className="btn">
              View Details
            </a>
          </div>
          <div className="project-card">
            <h3>Hospital Management System</h3>
            <p>
              Built a centralized platform for managing hospital operations with
              React frontend and Spring Boot backend, ensuring security and
              scalability.
            </p>
            <a href="#" className="btn">
              View Details
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i className="bx bxs-terminal"></i>
            <h3>Computer Programmer</h3>
            <p>I love programming</p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bx-code"></i>
            <h3>Web Development</h3>
            <p>I love programming</p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxl-android"></i>
            <h3>App Development</h3>
            <p>I love programming</p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" name="Email" placeholder="Email Address" />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social">
          <a href="https://www.linkedin.com/in/praneeth-ganesh-aa9b4b268/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/PraneethGanesh">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/praneeth_ganesh/">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <p className="copyright">&copy; Praneeth - All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
