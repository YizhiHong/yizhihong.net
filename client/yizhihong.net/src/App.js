import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Profile></Profile>
        </Layout>
      </div>
    );
  }
}

export default App;
