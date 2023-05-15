import './App.css';
import React from 'react';
import Item from './components/Item.js'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <header className="App-header">
          To Do List
        </header>
      </div>
      <Item/>
    </div>
  );
}

export default App;
