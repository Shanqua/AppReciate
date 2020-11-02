import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeComponent from './TimeComponent';
import fetchAllFeatures from './FeatureFlag';

function App() {
const flagVal = fetchAllFeatures();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <p>The current date and time is <strong><TimeComponent/></strong></p>
      </header>
      

    </div>
  );
}

export default App;
