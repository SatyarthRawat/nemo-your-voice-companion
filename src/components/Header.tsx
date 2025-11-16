export const Header = () => {
  return (
    <header style={{
      background: 'hsl(220 20% 14%)',
      borderBottom: '1px solid hsl(217 25% 22%)',
      padding: '20px',
      position: 'sticky',
      top: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'hsl(195 100% 50%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            🤖
          </div>
          <div>
            <h1 style={{ color: 'hsl(210 40% 98%)', fontSize: '28px', margin: 0 }}>
              NEMO
            </h1>
            <p style={{ color: 'hsl(215 20% 65%)', fontSize: '12px', margin: 0 }}>
              Naturally Evolving Model
            </p>
          </div>
        </div>
        
        <button style={{
          background: 'transparent',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer'
        }}>
          ⚙️
        </button>
      </div>
    </header>
  );
};
