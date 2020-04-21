import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    );
  }
}

export default App;
