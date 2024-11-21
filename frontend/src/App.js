import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from '.pagesCustomers';
import Login from '.pagesLogin';

function App() {
  return (
    Router
      Switch
        Route path=login component={Login} 
        Route path=customers component={Customers} 
      Switch
    Router
  );
}

export default App;
