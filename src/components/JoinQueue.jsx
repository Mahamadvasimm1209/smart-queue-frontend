import React, { useState } from 'react';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

export default function JoinQueue() {
  const [service, setService] = useState('bank');
  const [urgency, setUrgency] = useState('normal');
  const [ticket, setTicket] = useState(null);

  const join = async () => {
    const res = await API.post('/join', { name: 'TestUser', type: service });
    setTicket(res.data.item);
  };

  return (
    <div>
      <h2>Join Queue</h2>
      <select value={service} onChange={e => setService(e.target.value)}>
        <option value='bank'>Bank</option>
        <option value='hospital'>Hospital</option>
        <option value='cafeteria'>Cafeteria</option>
      </select>
      <select value={urgency} onChange={e => setUrgency(e.target.value)}>
        <option value='normal'>Normal</option>
        <option value='high'>High</option>
        <option value='vip'>VIP</option>
      </select>
      <button onClick={join}>Join</button>
      {ticket && (
        <div>
          <p>Your ticket ID: {ticket.id}</p>
        </div>
      )}
    </div>
  );
}
