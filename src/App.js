import React from 'react';
import { Routes, Route } from "react-router-dom";
import ColorBlind from './pages/ColorBlind';
import Main from './pages/main';

// App Component with Routing
const App = () => {
  return <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/color-blind" element={<ColorBlind />} />
  </Routes>;
};

export default App;
