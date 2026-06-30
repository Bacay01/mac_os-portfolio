function Dock({ onIconClick }) {
  const apps = [
    { name: "About Me", icon: "👤" },
    { name: "Projects", icon: "💻" },
    { name: "Contact", icon: "✉️" },
    { name: "Resume", icon: "📄" },
  ];

  return (
    <div className="dock">
      {apps.map((app) => (
        <div
          key={app.name}
          className="dock-icon"
          onClick={() => onIconClick(app.name)}
        >
          <span className="dock-icon-emoji">{app.icon}</span>
          <span className="dock-icon-label">{app.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Dock;