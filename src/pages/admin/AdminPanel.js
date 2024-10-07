import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css'; // Import the CSS file for styling

const AdminPanel = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        axios.get('http://localhost:5000/api/trading/transactions').then((res) =>{
setTransactions(res.data);console.log('Response data:', res.data);
        });
        
        
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="admin-panel">
      {/* Transactions Table */}
      <h2>Transactions</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.userId}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;