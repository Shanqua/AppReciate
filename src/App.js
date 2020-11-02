import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeComponent from './TimeComponent';
import fetchAllFeatures from './FeatureFlag';

function App() {

const getFeatureState = featureName =>{
const flagVal = fetchAllFeatures();
  //Check for FeatureName against returned values
  //check if flagVal has the value featureName
  console.log(flagVal);
  console.log(featureName);
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <p>The current date and time is <strong><TimeComponent/></strong></p>
      </header>
      {getFeatureState("X")}

    </div>
  );
}

export default App;
