import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 340 }}>
      <input className="input" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
      <input className="input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
      <button className="btn" type="submit">Login</button>
      <p className="subtitle" style={{margin:0}}>Preview: {formData.username}</p>
    </form>
  );
}
