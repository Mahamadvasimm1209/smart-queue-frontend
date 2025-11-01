import React from 'react';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

export default function AdminDashboard() {
  const next = async () => {
    try {
      const res = await API.post('/admin/next');
      alert(`Next user: ${res.data.item?.name || 'none'}`);
    } catch (err) {
      console.error(err);
      alert('Error calling next user');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={next}>Call Next</button>
    </div>
  );
}
