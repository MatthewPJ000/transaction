import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/getAllUsers');
        setUsers(response.data); // Update the state with fetched data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-panel">
      <h2>Users</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Wallet Balance</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>${user.walletBalance.toFixed(2)}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;
