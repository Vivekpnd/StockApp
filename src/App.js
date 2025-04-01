import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chart from './component/Chart'; 
import Navigation from './component/Navigation';
import Home from './Pages/Home';

function App() {
  const [symbol, setSymbol] = useState(''); 

  return (
    <BrowserRouter>
      <Navigation setSymbol={setSymbol} /> {/* Pass setSymbol to Navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={symbol && <Chart symbol={symbol} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
