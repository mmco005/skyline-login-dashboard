const Dashboard = ({ username }) => {
  return (
    <div className="welcome-card">
      <h1>Welcome back, {username}!</h1>
      <p>Successfully logged into SkyLine Analytics Gatekeeper.</p>
    </div>
  );
};

export default Dashboard;