import profilePic from "../assets/profile.JPG"

function AboutMe() {
  const skills = [
    "JavaScript", "React", "Node.js", "Express",
    "MongoDB", "Mongoose", "JWT Auth", "REST APIs",
  ];

  return (
    <div className="about-me">
      <img src={profilePic} alt="Profile" className="about-photo" />

      <h2>Hi, I'm Bakare Samuel Adebisi 👋</h2>

      <p>
        I'm a full-stack JavaScript developer, currently in Level 4 at SQI.
        I build with the MERN stack — React on the frontend, Express and
        MongoDB on the backend.
      </p>

      <p>
        This portfolio is built like a desktop OS — every window you're
        clicking through right now is a real React component, draggable
        and resizable, just like this one.
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