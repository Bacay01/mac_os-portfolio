import { Rnd } from 'react-rnd'

function Window({ title, children, onClose, defaultPosition, isActive, onFocus }) {
  return (
    <Rnd
      default={{
        x: defaultPosition?.x || 100,
        y: defaultPosition?.y || 100,
        width: 480,
        height: 500,
      }}
      minWidth={300}
      minHeight={200}
      bounds="parent"
      dragHandleClassName="window-titlebar"
      className="window"
      style={{ zIndex: isActive ? 100 : 10 }}
      onMouseDown={onFocus}
    >
      <div className="window-titlebar">
        <div className="window-controls">
          <span className="window-dot close" onClick={onClose}></span>
          <span className="window-dot minimize"></span>
          <span className="window-dot maximize"></span>
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