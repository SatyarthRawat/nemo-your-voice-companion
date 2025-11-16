export const CommandHistory = () => {
  const messages = [
    { id: 1, type: 'user', text: "What's the weather?", time: '10:30 AM' },
    { id: 2, type: 'bot', text: "It's sunny, 75°F", time: '10:30 AM' },
    { id: 3, type: 'user', text: 'Play music', time: '10:32 AM' },
    { id: 4, type: 'bot', text: 'Playing your favorites', time: '10:32 AM' },
  ];

  return (
    <div style={{ 
      background: 'hsl(220 20% 14%)', 
      borderRadius: '12px', 
      padding: '20px',
      maxHeight: '400px',
      overflow: 'auto'
    }}>
      <h3 style={{ color: 'hsl(210 40% 98%)', marginBottom: '20px' }}>
        📝 Recent Commands
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {messages.map((msg) => (
          <div 
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              background: msg.type === 'user' ? 'hsl(195 100% 50%)' : 'hsl(217 25% 20%)',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '10px',
              maxWidth: '70%'
            }}>
              <p style={{ margin: 0 }}>{msg.text}</p>
              <small style={{ opacity: 0.7, fontSize: '11px' }}>{msg.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
