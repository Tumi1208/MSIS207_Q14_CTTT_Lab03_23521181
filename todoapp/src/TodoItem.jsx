export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="item">
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button className="btn" onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
