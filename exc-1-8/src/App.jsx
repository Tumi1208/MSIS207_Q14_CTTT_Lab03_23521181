import Card from './Card'
import UserProfile from './UserProfile'
import Counter from './Counter'
import Login from './Login'
import Accordion from './Accordion'
import './index.css'

const user1 = {
  name: 'DucPhu',
  email: 'Phuday@example.com',
  avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

const user2 = {
  name: 'Tumi',
  email: 'Tumi@example.com',
  avatarUrl: 'https://i.imgur.com/MK3eW3As.jpg',
  imageSize: 90,
}

export default function App() {
  return (
    <div className="wrapper">
      <div className="topbar">
        <div className="brand">
          <div className="brand-badge">rl</div>
          <div>
            <h1>React Lab 3 — Exercises</h1>
            <div className="subtitle">Lab03 - practice content </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>User Profiles</h3>
          <div className="hr" />
          <div className="profile">
            <Card title="">
              <div className="profile-item">
                <img src={user1.avatarUrl} alt={user1.name} />
                <div>
                  <div className="profile-name">{user1.name}</div>
                  <div className="profile-mail">{user1.email}</div>
                </div>
              </div>
            </Card>

            <Card title="">
              <div className="profile-item">
                <img src={user2.avatarUrl} alt={user2.name} />
                <div>
                  <div className="profile-name">{user2.name}</div>
                  <div className="profile-mail">{user2.email}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="card">
          <h3>Counter</h3>
          <div className="hr" />
          <Counter />
        </div>

        <div className="card">
          <h3>Login Form</h3>
          <div className="hr" />
          <Login />
        </div>

        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h3>Accordion Example</h3>
          <div className="hr" />
          <Accordion />
        </div>
      </div>
    </div>
  )
}
