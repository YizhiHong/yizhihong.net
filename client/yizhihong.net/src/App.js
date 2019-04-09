import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Routers from './components/Routers/Routers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Routers></Routers>
        </Layout>
      </div>
    );
  }
}

export default App;
