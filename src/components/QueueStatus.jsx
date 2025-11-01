import React, { useState } from "react";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

export default function QueueStatus() {
  const [ticketId, setTicketId] = useState("");
  const [status, setStatus] = useState(null);

  const check = async () => {
    try {
      const res = await API.get(`/status/${ticketId}`);
      setStatus(res.data);
    } catch (err) {
      console.error(err);
      setStatus({ error: "Ticket not found" });
    }
  };

  return (
    <div>
      <h2>Check Status</h2>
      <input
        placeholder="Enter Ticket ID"
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
      />
      <button onClick={check}>Check</button>
      {status && (
        <pre>{JSON.stringify(status, null, 2)}</pre>
      )}
    </div>
  );
}
