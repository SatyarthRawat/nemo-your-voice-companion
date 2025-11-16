export const FeatureCards = () => {
  const features = [
    { emoji: '💬', title: 'AI Chat', desc: 'Natural conversations' },
    { emoji: '🎵', title: 'Media', desc: 'Play music & videos' },
    { emoji: '📧', title: 'Email', desc: 'Send messages' },
    { emoji: '🌤️', title: 'Weather', desc: 'Forecasts' },
    { emoji: '🔍', title: 'Search', desc: 'Google & YouTube' },
    { emoji: '📅', title: 'Schedule', desc: 'Appointments' },
    { emoji: '🗺️', title: 'Navigate', desc: 'Directions' },
    { emoji: '📱', title: 'Contacts', desc: 'Manage contacts' },
  ];

  return (
    <div style={{ marginTop: '40px' }}>
      <h3 style={{ color: 'hsl(210 40% 98%)', marginBottom: '20px' }}>
        Voice Commands
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px'
      }}>
        {features.map((feature, i) => (
          <div
            key={i}
            style={{
              background: 'hsl(220 20% 14%)',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              border: '1px solid hsl(217 25% 22%)'
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>
              {feature.emoji}
            </div>
            <h4 style={{ color: 'hsl(210 40% 98%)', margin: '5px 0' }}>
              {feature.title}
            </h4>
            <p style={{ color: 'hsl(215 20% 65%)', fontSize: '13px', margin: 0 }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
