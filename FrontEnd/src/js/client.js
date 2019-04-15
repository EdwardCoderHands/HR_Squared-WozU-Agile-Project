// Imports the necessary files
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Employees from "./pages/Employees";
import FetchApiReviews from "./pages/FetchApiReviews";
import FetchApiSalaries from "./pages/FetchApiSalaries";
import Layout from "./components/layout/Layout";

const app = document.getElementById('app');

// Renders a React element into a root DOM node
ReactDOM.render(
  
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Employees}></IndexRoute>
      <Route path="reviews" name="reviews" component={FetchApiReviews}></Route>
      <Route path="salaries" name="salaries" component={FetchApiSalaries}></Route>
      <Route path="employees" name="employees" component={Employees}></Route>
    </Route>
  </Router>

,app); 
