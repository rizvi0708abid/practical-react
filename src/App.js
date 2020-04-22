import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/home" exact component={Home} />
          <Route path="/home/:id" component={ProductDetails} />
          <Route path="/contactUs" exact component={ContactUs} />
        </Router>
      </Provider>
    );
  }
}

export default App;
