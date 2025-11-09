import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);

  const nextId = () =>
    todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;

  const addTodo = (text) => {
    setTodos(prev => [...prev, { id: nextId(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 480, padding: 16 }}>
      <h2>To-Do List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
