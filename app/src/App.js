import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Get ready to rock!</h1>
        </header>
        <p className="App-intro">
          Hello World!
        </p>
        <DatePicker />
        <HelloComponent />
        <ImageComponent />
      </div>
    );
  }
}

export default App;

class HelloComponent extends Component {
  render() {
    return <div>Hello</div>;
  }
}

class ImageComponent extends Component {
  render() {
    return <img src="https://ybxzcgnc7b-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/cute.jpg" />
  }
}

class DatePicker extends Component {
  render() {
    return <input type="date" />
  }
}
