import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    addTodo(t);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} className="row">
      <input className="input" type="text" placeholder="Add a task..." value={text} onChange={(e)=>setText(e.target.value)} />
      <button className="btn" type="submit">Add Task</button>
    </form>
  );
}
