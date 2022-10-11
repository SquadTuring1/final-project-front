import React from 'react';
import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import Navbar from '../components/Navbar/index';
import Registration from '../pages/Registration/index';
import Dashboard from '../pages/Dashboard/index';
import Terms from '../pages/Terms/index';
import PersonalProfile from '../pages/PersonalProfile/index';

import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="/" element={<Navbar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="terms" element={<Terms />} />
        <Route path="profile" element={<PersonalProfile />} />
      </Route>
    </Routes>
  );
};

export default Router;
