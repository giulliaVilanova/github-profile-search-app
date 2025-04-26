import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StyledProfile from './components/StyledProfile';
import TailwindProfile from './components/TailwindProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styled/users/:username" element={<StyledProfile />} />
        <Route path="/tailwind/users/:username" element={<TailwindProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
