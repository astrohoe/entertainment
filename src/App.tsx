import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Countries from './pages/countries/Countries';
import Reaction from './pages/reaction/Reaction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/reaction' element={<Reaction />} />
      </Routes>
    </Router>
  );
}

export default App;
