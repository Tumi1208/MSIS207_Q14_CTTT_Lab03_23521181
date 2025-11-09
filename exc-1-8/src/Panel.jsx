export default function Panel({ title, children, isActive, onShow }) {
    return (
      <div className="panel">
        <h4>{title}</h4>
        {isActive ? (
          <div>
            {children}
            <button onClick={onShow}>Hide</button>
          </div>
        ) : (
          <button onClick={onShow}>Show</button>
        )}
      </div>
    );
  }
  