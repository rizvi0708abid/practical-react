import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginPage from "./components/loginPage";
import ContactUs from "./components/contactUs";
import ProductDetails from "./components/productDetails";
import Home from "./components/home";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "./components/protectedRroutes";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoutes exact path="/app" component={App} />
          <ProtectedRoutes exact path="/app/products" component={Home} />
          <ProtectedRoutes
            exact
            path="/app/products/:id"
            component={ProductDetails}
          />
          <ProtectedRoutes exact path="/app/contactUs" component={ContactUs} />
        </Provider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
