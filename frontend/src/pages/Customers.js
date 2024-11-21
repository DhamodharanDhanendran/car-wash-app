import React, { useState, useEffect } from 'react';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name} - {customer.contact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
