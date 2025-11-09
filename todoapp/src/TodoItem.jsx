export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </li>
    );
  }
  