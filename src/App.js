import React, { Component } from 'react';
import Componente_contador_tempo from './Componente_contador';
import Componente_contador_click from './Componente_contador_click';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Componente_contador_tempo
          contador={this.state.contador=0}
        />
        <Componente_contador_click
          contadorClick={this.state.contador=0}
        />
      </div>
    );
  }
}

export default App;
