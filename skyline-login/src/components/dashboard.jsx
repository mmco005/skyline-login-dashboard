const Dashboard = ({ username }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      background: 'white', 
      borderRadius: '20px', 
      boxShadow: '0 10px 30px rgba(255, 182, 193, 0.4)',
      border: '3px solid #fce4ec'
    }}>
      <h1 style={{ color: '#6a1b9a', fontSize: '2.5rem' }}>Hi, {username}! ✨</h1>
      <p style={{ color: '#d81b60', fontWeight: 'bold', fontSize: '18px' }}>Access Granted to SkyLine</p>
      <hr style={{ margin: '20px 0', border: '0.5px solid #f8bbd0' }} />
      <p style={{ color: '#4a148c' }}>Your personalized dashboard is ready.</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: '#f3e5f5', 
        color: '#8e24aa', 
        borderRadius: '10px',
        fontSize: '14px'
      }}>
        System Status: Online 
      </div>
    </div>
  );
};

export default Dashboard;