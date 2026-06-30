import Clock from './Clock'

function MenuBar({ darkMode, setDarkMode }) {
  return (
    <div className={`menu-bar ${darkMode ? 'menu-dark' : 'menu-light'}`}>
      <span className="menu-bar-left">Bakare Samuel Adebisi</span>
      <div className="menu-bar-right">
        <span
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </span>
        <Clock />
      </div>
    </div>
  )
}

export default MenuBar