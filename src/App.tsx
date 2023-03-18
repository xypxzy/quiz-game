import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import {
  Home,
  HowItWorks,
  About,
  Features,
  NotFound,
  Login,
} from './pages/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='howItWorks' element={<HowItWorks />} />
        <Route path='about' element={<About />} />
        <Route path='features' element={<Features />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
