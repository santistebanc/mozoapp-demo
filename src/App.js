import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Demo simulation for mozoapp</h3>
        <iframe className='phone' src='http://mozoapp.tk' height="650" width='400'/>

        <iframe className='kitchen' src='http://mozoapp.tk/cocina' height="650" width='800'/>
      </div>
    );
  }
}

export default App;
