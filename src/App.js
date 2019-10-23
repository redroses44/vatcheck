import React from 'react';
import './App.css';
import Home from './components/Home';
import VatState from './context/vat/VatState';

const App = () => {
  return (
    <VatState>
      <div className="container">
        <Home />
      </div>
    </VatState>
  );
};

export default App;
