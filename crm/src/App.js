import React, { useEffect } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './style.scss';

import { MastersPage } from './pages/masters'
import { LoginPage } from './pages/login';
import { useAuth } from './contexts/AuthContext';
import { PrivateRoute } from './components';
import { CustomersApi } from './api';

export default function App() {
  const { isAuth, logout } = useAuth();

  useEffect(() => {
    CustomersApi.getCustomers().then(list => console.log(list));  
  }, []);

  return (
    <div className="container">

      {isAuth && <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <button onClick={logout}>Logout</button>
      </nav>}

      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <MastersPage />
          </PrivateRoute>
        }/>

        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
