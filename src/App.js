import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editt <code>src/App.js</code> and save to reload.
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
      <div style={{flex: 50}}>
        <Editor />
      </div>
    </div>
  );
}

export default App;
