import React from 'react';
import logo from './logo.svg';
import Feature from './Feature.js'
import './App.css';
import ColorSelector from './ColorSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ColorSelector />
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
