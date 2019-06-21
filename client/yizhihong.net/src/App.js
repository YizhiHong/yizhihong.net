import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Routers from "./Routers/Routers";
import APIProvider from "./API/APIProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <APIProvider>
            <Routers />
          </APIProvider>
        </Layout>
      </div>
    );
  }
}

export default App;
