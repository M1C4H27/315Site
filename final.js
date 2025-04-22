// final.js
const App = () => {
    return (
      <div className="parent" id="wrapper">
        {/* Navigation */}
        <nav className="topnav" id="tnav">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="projects.html">Projects</a>
          <a href="experience.html">Experience</a>
          <a href="contact.html">Contact</a>
        </nav>
  
        {/* Intro Section */}
        <div className="intro" id="welcome">
          <h1>Welcome to Micah's Website</h1>
          <img src="hero.jpg" alt="Hero Image" />
          <p className="words">
            My name is Micah and I am a software developer. I am passionate about creating software that is
            both functional and user-friendly. I have experience with a variety of programming languages and
            tools, and I am always looking to learn new things. I am currently seeking new opportunities to
            work on exciting projects with a talented team. Please feel free to contact me if you would like
            to discuss a project or job opportunity.
          </p>
        </div>
  
        {/* Footer */}
        <div className="footer">
          <p className="center">
            &copy; <span id="copyright"></span> Micah's Website. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  
  