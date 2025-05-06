function Home() {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <header
        className="hero"
        id="home"
        style={{
          backgroundImage: `url("/spiderman1.jpg")`,
        }}
      >
        <h1 className="comic-title">Friendly Neighborhood Developer</h1>
        <p className="hero-sub">
          Just like Spider-Man – Fast, Reliable, and Always Ready to Code!
        </p>
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>🕷️ ABOUT ME</h2>
        <p>
          I’m a passionate web developer inspired by heroes — in code and comics!
          With a focus on React and clean UI design, I strive to build web apps that are fast, responsive, and accessible.
        </p>
      </section>

      {/* Navigation Boxes */}
      <section className="spidey-row">
        <div className="spidey-box">
          <h3>Projects</h3>
          <p>Browse My Amazing Projects</p>
          <a href="#projects">
            <button className="black-btn">Tap</button>
          </a>
        </div>
        <div className="spidey-box">
          <h3>Contact</h3>
          <p>Have a question or opportunity?</p>
          <a href="#contact">
            <button className="black-btn">Swing</button>
          </a>
        </div>
        <div className="spidey-box">
          <h3>Skills</h3>
          <p>Check out my super dev powers</p>
          <a href="#skills">
            <button className="black-btn">Tap</button> {/* ✅ changed to black-btn */}
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2>🧠 My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive personal website built with React and CSS.</p>
            <p><strong>Tech:</strong> React, CSS</p>
            <a href="#">GitHub</a>
          </div>
          <div className="project-card">
            <h3>Weather App</h3>
            <p>Displays real-time weather using OpenWeather API.</p>
            <p><strong>Tech:</strong> JavaScript, HTML, CSS</p>
            <a href="#">Live Demo</a>
          </div>
          <div className="project-card">
            <h3>AI Chatbot</h3>
            <p>Chatbot built using OpenAI API with conversational memory.</p>
            <p><strong>Tech:</strong> Node.js, Express, OpenAI</p>
            <a href="#">GitHub</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2>🛠️ Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>📬 Contact Me</h2>
        <p>Email: <a href="mailto:you@example.com">skammar1@aum.edu</a></p>
        
      </section>

      <footer className="footer">
        <button className="view-btn">Explore All Missions</button>
      </footer>
    </div>
  );
}

export default Home;
