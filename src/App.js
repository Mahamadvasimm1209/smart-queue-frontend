import React, { useEffect } from "react";
import axios from "axios";
import JoinQueue from "./components/JoinQueue";
import QueueStatus from "./components/QueueStatus";
import AdminDashboard from "./components/AdminDashboard";

// ✅ Set your backend connection here
axios.defaults.baseURL = "http://localhost:3000";

export default function App() {
  useEffect(() => {
    console.log("Frontend Connected to Backend:", axios.defaults.baseURL);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🚀 Smart Queue Optimiser</h1>
      <JoinQueue />
      <hr />
      <QueueStatus />
      <hr />
      <AdminDashboard />
    </div>
  );
}
