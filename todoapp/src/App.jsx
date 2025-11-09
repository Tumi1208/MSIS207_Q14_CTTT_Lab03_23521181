import TodoApp from './TodoApp';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
      }}
    >
      <div
        style={{
          display: 'grid',
          gap: 12,
          maxWidth: 480,
          width: '100%',
          padding: 16,
          backgroundColor: '#2c2c2c',
          borderRadius: 12,
          boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
        }}
      >
        <TodoApp />
      </div>
    </div>
  );
}
