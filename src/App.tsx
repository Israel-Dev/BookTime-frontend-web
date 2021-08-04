import React from 'react';
import logo from './logo.svg';
import './App.css';

const { REACT_APP_SERVER } = process.env

const App = () => {
  
  console.log("REACT_APP_SERVER", REACT_APP_SERVER)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.tsx and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
