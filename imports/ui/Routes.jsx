// Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";

// Pages
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Register from "./pages/Register.jsx";

const Routes = () =>
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/register" component={Register} />
    </div>
  </Router>;

export default Routes;
