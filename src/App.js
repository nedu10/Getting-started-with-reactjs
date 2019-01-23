import React, { Component } from 'react';
// import logo from './logo.svg';
import Welcome from './components/Welcome'
import ClassWelcome from './components/ClassWelcome'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>React is not that hard</p>
        {/* <Welcome name='chinedu' heroStyle="nedu"  /> */}
        <Welcome name='Azimoh' heroStyle="zims">This is the chidren of the component</Welcome>
        <ClassWelcome />
      </div>
    );
  }
}

export default App;
