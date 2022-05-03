import React, { Component } from 'react';
import Input from './components/input';
import Output from './components/output';

class App extends Component {

  render() {
    return (
      <div className='container'>
      <h1>Very Simple Todo App</h1>
        <p>Track all of the things</p>
        <hr />
        <div className='box'>
          <Input />
          <Output />
        </div>
      </div>
    );
  }
}

export default App;
