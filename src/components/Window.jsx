import { Rnd } from 'react-rnd'

function Window({ title, children, onClose, isActive, onFocus, darkMode }) {
  const centerX = Math.max(0, (window.innerWidth / 2) - 240);
  const centerY = Math.max(50, (window.innerHeight / 2) - 210);

  return (
    <Rnd
      default={{
        x: centerX,
        y: centerY,
        width: 480,
        height: 420,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      dragHandleClassName="window-titlebar"
      className={`window ${darkMode ? 'window-dark' : 'window-light'}`}
      style={{ zIndex: isActive ? 100 : 10 }}
      onMouseDown={onFocus}
    >
      <div className="window-titlebar">
        <div className="window-controls">
          <span
            onClick={onClose}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#ff5f57',
              display: 'inline-block',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          ></span>
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#febc2e',
              display: 'inline-block',
              flexShrink: 0,
            }}
          ></span>
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#28c840',
              display: 'inline-block',
              flexShrink: 0,
            }}
          ></span>
        </div>
        <span className="window-title">{title}</span>
      </div>
      <div className="window-content">
        {children}
      </div>
    </Rnd>
  )
}

export default Window