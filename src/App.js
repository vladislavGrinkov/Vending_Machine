import React from 'react';
import './App.css';
import Cards from './components/Cards';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="page">
      <div className="page__showcase">
        <div className="page__showcase-body">
          <ul className="product-list">
            <Cards />
          </ul>
        </div>
      </div>
      <ControlPanel />
    </div>
  );
}

export default App;
