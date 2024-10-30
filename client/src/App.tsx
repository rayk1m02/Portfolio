import React from 'react';
import logo from './logo.svg';
import './App.css';

import IntroDisplay from './components/IntroDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, my name is Raymond Kim.</p>
        <p>This is my first React WebApp</p>
        <p>Welcome to my portfolio!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <IntroDisplay />
      </main>
    </div>
  );
}

export default App;

