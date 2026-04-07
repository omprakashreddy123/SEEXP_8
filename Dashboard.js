import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dashboard</h1>
      <h2>Welcome, {name} 🎉</h2>
    </div>
  );
}

export default Dashboard;
