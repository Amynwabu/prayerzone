import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        🙏 PRAYERZONE
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
        Where Prayer Meets Power
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '30px',
        borderRadius: '15px',
        maxWidth: '600px',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ marginBottom: '15px' }}>Welcome to Your Prayer Community</h2>
        <p style={{ lineHeight: '1.6' }}>
          Join thousands of believers connecting in prayer. Experience the power of united prayer,
          share testimonies, and grow in your faith journey together.
        </p>
        <button style={{
          marginTop: '20px',
          padding: '12px 30px',
          fontSize: '1.1rem',
          background: '#fff',
          color: '#667eea',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
