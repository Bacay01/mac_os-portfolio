import profilePic from "../assets/profile.JPG"

function AboutMe() {
  const skills = [
    "Frontend:   React, Vite, HTML, CSS, JavaScript",
"Backend:    Node.js, Express, MongoDB, Mongoose",
"Auth:       JWT, bcrypt, REST APIs",
"Tools:      Git, GitHub, Postman, VS Code",
"Engineering: AutoCAD, Technical Report Writing",
  ];

  return (
    <div className="about-me">
      <img src={profilePic} alt="Profile" className="about-photo" />

      <h2>Hi, I'm Bakare Samuel Adebisi 👋</h2>

      <p>
        I'm a Graduate Mechanical Engineer (2:1, LAUTECH) now 
        transitioning into full-stack software development. 
        Currently in Level 4 at SQI College of ICT, building 
        production-ready web applications with the MERN stack.
      </p>

      <p>
       This portfolio is itself a full React application styled 
        like a macOS desktop — every window you're clicking through 
        is a real draggable, resizable React component built from 
        scratch.
      </p>

      <h3>Skills</h3>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default AboutMe