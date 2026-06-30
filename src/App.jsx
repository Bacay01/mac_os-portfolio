import { useState, useEffect } from 'react'
import './App.css'
import MenuBar from './components/MenuBar'
import Dock from './components/Dock'
import Window from './components/Window'
import AboutMe from './apps/AboutMe'
import Projects from './apps/Project'
import Contact from './apps/Contact'
import Resume from './apps/Resume'

import wall1 from './assets/Whatsapp1.jpeg'
import wall2 from './assets/Whatsapp2.jpeg'
import wall3 from './assets/Whatsapp3.jpeg'
import wall4 from './assets/Whatsapp4.jpeg'
import wall5 from './assets/Whatsapp5.jpeg'
import wall6 from './assets/Whatsapp6.jpeg'

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [wallpaper, setWallpaper] = useState(
    localStorage.getItem("wallpaper") || `url(${wall2})`
  );
  const [contextMenu, setContextMenu] = useState(null);
  const [showWallpaperInput, setShowWallpaperInput] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeWindow, setActiveWindow] = useState(null);
  const [booting, setBooting] = useState(true);

  const wallpapers = [wall1, wall2, wall3, wall4, wall5, wall6];

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openWindow = (appName) => {
    if (!openWindows.includes(appName)) {
      setOpenWindows([...openWindows, appName]);
    }
    setActiveWindow(appName);
  };

  const closeWindow = (appName) => {
    setOpenWindows(openWindows.filter((name) => name !== appName));
    setActiveWindow(null);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
    setShowWallpaperInput(false);
  };

  const handleChangeWallpaper = () => {
    setShowWallpaperInput(true);
    setContextMenu(null);
  };

  const closeContextMenu = () => {
    setContextMenu(null);
    setShowWallpaperInput(false);
  };

  if (booting) {
    return (
      <div className="boot-screen">
        <div className="boot-content">
          <div className="boot-avatar">
            <img src={wall2} alt="boot" />
          </div>
          <h2>Bakare Samuel Adebisi</h2>
          <p>Graduate Mechanical Engineer · Full-Stack Developer</p>
          <div className="boot-loader">
            <div className="boot-loader-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`desktop ${darkMode ? 'dark' : 'light'}`}
      style={{
        backgroundImage: wallpaper,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onContextMenu={handleRightClick}
      onClick={closeContextMenu}
    >
      <MenuBar darkMode={darkMode} setDarkMode={setDarkMode} />

      {openWindows.includes("About Me") && (
        <Window
          title="About Me"
          onClose={() => closeWindow("About Me")}
          isActive={activeWindow === "About Me"}
          onFocus={() => setActiveWindow("About Me")}
        >
          <AboutMe />
        </Window>
      )}

      {openWindows.includes("Projects") && (
        <Window
          title="Projects"
          onClose={() => closeWindow("Projects")}
          isActive={activeWindow === "Projects"}
          onFocus={() => setActiveWindow("Projects")}
        >
          <Projects />
        </Window>
      )}

      {openWindows.includes("Contact") && (
        <Window
          title="Contact"
          onClose={() => closeWindow("Contact")}
          isActive={activeWindow === "Contact"}
          onFocus={() => setActiveWindow("Contact")}
        >
          <Contact />
        </Window>
      )}

      {openWindows.includes("Resume") && (
        <Window
          title="Resume"
          onClose={() => closeWindow("Resume")}
          isActive={activeWindow === "Resume"}
          onFocus={() => setActiveWindow("Resume")}
        >
          <Resume />
        </Window>
      )}

      {contextMenu && (
        <div
          className="context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="context-item" onClick={handleChangeWallpaper}>
            🖼️ Change Wallpaper
          </div>
          <div className="context-item" onClick={() => {
            openWindow("About Me");
            closeContextMenu();
          }}>
            👤 About Me
          </div>
        </div>
      )}

      {showWallpaperInput && (
        <div className="wallpaper-modal" onClick={(e) => e.stopPropagation()}>
          <p>Choose a wallpaper:</p>
          <div className="wallpaper-grid">
            {wallpapers.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`wallpaper ${index + 1}`}
                className="wallpaper-thumb"
                onClick={() => {
                  const selected = `url(${img})`;
                  setWallpaper(selected);
                  localStorage.setItem("wallpaper", selected);
                  setShowWallpaperInput(false);
                }}
              />
            ))}
          </div>
          <button
            className="wallpaper-cancel"
            onClick={() => setShowWallpaperInput(false)}
          >
            Cancel
          </button>
        </div>
      )}

      <Dock onIconClick={openWindow} />
    </div>
  )
}

export default App