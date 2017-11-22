//External Dependies
import React, { Component } from 'react';

//Our Dependancies
import 'sanitize.css';
import './css/style.css';
import Form from './components/Form';
import Emoji from './components/Emoji';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
