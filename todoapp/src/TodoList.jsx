import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p>No todos yet.</p>;
  return (
    <ul style={{ paddingLeft: 16 }}>
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
