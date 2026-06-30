function Resume() {
  return (
    <div className="resume">

      <div className="resume-header">
        <div>
          <h2>Samuel Adebisi Bakare</h2>
          <p className="resume-title">Graduate Mechanical Engineer & Full-Stack Developer</p>
          <div className="resume-contact">
            <span>📍 Ibadan, Nigeria</span>
            <span>📞 08165410790</span>
            <span>✉️ bakaresamuel179@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Professional Summary</h3>
        <p>
          Detail-oriented Graduate Mechanical Engineer (2:1) from LAUTECH, 
          now transitioning into full-stack software development. Currently 
          in Level 4 at SQI College of ICT, building production-ready web 
          applications with the MERN stack. Combines engineering precision 
          with modern software development skills.
        </p>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Ladoke Akintola University of Technology (LAUTECH)</span>
            <span className="resume-item-date">Graduated: Nov 2025</span>
          </div>
          <p className="resume-item-sub">B.Tech — Mechanical Engineering · Second Class Upper (2:1)</p>
        </div>
        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">SQI College of ICT</span>
            <span className="resume-item-date">2025 — Present</span>
          </div>
          <p className="resume-item-sub">Full-Stack JavaScript Development · Level 4</p>
        </div>
      </div>

      <div className="resume-section">
        <h3>Industrial Experience</h3>
        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Rosco Autotech</span>
            <span className="resume-item-date">6 Months</span>
          </div>
          <p className="resume-item-sub">Mechanical Engineering Intern</p>
          <ul className="resume-list">
            <li>Executed advanced automotive diagnostics and complex system breakdowns</li>
            <li>Collaborated with senior engineers to troubleshoot critical faults</li>
            <li>Maintained preventive maintenance schedules for workshop workflows</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>Technical Skills</h3>
        <div className="resume-skills-grid">
          <div>
            <p className="resume-skill-label">Software Dev</p>
            <p>JavaScript, React, Node.js, Express, MongoDB, JWT, REST APIs</p>
          </div>
          <div>
            <p className="resume-skill-label">Engineering</p>
            <p>AutoCAD, Technical Report Writing, Maintenance Operations</p>
          </div>
          <div>
            <p className="resume-skill-label">Tools</p>
            <p>Git, GitHub, VS Code, Postman, Firebase</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Certifications</h3>
        <p>AutoCAD — Engineering Design and Drafting</p>
      </div>

    </div>
  )
}

export default Resume