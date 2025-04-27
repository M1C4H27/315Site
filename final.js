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
          <a href="react.html">Final</a>
        </nav>
  
        {/* Random Stuff */}
        <div className="intro" id="welcome">
          <h1 id="title">Welcome to Micah's Website</h1>
          <p className="text">This is a simple page built using React.</p>
        </div>
        {/* Text */}
        <div className="hero" id="text">
          <h1>React Framework</h1>
          <p>
            This page was built using react and is a simple example of react. It includes a navigation bar, some text, and a footer. The page is styled using CSS and includes some JavaScript for interactivity.
          </p>
        </div>
        {/* Footer */}
        <div className="footer">
          <p className="center">
            &copy; <span id="copyright"></span> Micah's Website. All rights reserved.</p>
        </div>
      </div>
    );
  };
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  
  