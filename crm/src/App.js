import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './style.scss';

import { MastersPage } from './pages/masters'
import { LoginPage } from './pages/login';

export default function App() {
  return (
    <div className="container">

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MastersPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      
    </div>
  );
}
