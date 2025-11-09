import Card from './Card'
import UserProfile from './UserProfile'
import Counter from './Counter'
import Login from './Login'
import Accordion from './Accordion'

const user1 = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

const user2 = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatarUrl: 'https://i.imgur.com/MK3eW3As.jpg',
  imageSize: 90,
}

export default function App() {
  return (
    <div style={{ display: 'grid', gap: 16, padding: 16 }}>
      <h2>Exercises 1–8</h2>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        <Card title="User A (light)">
          <UserProfile userData={user1} theme="light" />
        </Card>
        <Card title="User B (dark)">
          <UserProfile userData={user2} theme="dark" />
        </Card>
      </div>
      <Counter />
      <Login />
      <Accordion />
    </div>
  )
}
