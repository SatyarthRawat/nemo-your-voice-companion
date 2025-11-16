import { useState } from 'react';

export const VoiceInterface = () => {
  const [isListening, setIsListening] = useState(false);

  const handleClick = () => {
    setIsListening(!isListening);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <button
        onClick={handleClick}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: 'none',
          background: isListening ? 'hsl(195 100% 50%)' : 'hsl(217 25% 20%)',
          color: 'white',
          fontSize: '48px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
      >
        🎤
      </button>
      
      <h2 style={{ color: 'hsl(210 40% 98%)', marginTop: '30px', fontSize: '24px' }}>
        {isListening ? 'Listening...' : 'Click to speak'}
      </h2>
      
      <p style={{ color: 'hsl(215 20% 65%)', marginTop: '10px' }}>
        {isListening ? 'Say your command' : 'Press the microphone'}
      </p>
    </div>
  );
};
