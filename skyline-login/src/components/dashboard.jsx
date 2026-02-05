const Dashboard = ({ username }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e8f0fe', color: '#1a73e8' }}>
      <div style={{ padding: '50px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>Welcome, {username}!</h1>
        <h2 style={{ fontWeight: '300' }}>SkyLine Analytics Dashboard</h2>
        <p style={{ color: '#555', marginTop: '20px' }}>You have successfully bypassed the Gatekeeper.</p>
        <div style={{ marginTop: '30px', padding: '10px', backgroundColor: '#1a73e8', color: 'white', borderRadius: '5px' }}>
          System Status: Online
        </div>
      </div>
    </div>
  );
};

export default Dashboard;