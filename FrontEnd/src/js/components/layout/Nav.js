// Imports the necessary files
import React from "react";
import { IndexLink, Link } from "react-router";


// Creates a class for displaying the Navigation buttons
export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const FetchEmployeesClass = location.pathname === "/" ? "active" : "";
    const FetchApiReviewsClass = location.pathname.match(/^\/reviews/) ? "active" : "";
    const FetchApiSalariesClass = location.pathname.match(/^\/salaries/) ? "active" : "";

    return (

      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">

        <div class="container">
          
          <ul class="nav navbar-nav">
            <li class={FetchEmployeesClass}>
              <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Employees</IndexLink>
            </li>
            <li class={FetchApiReviewsClass}>
              <Link to="reviews" onClick={this.toggleCollapse.bind(this)}>Reviews</Link>
            </li>
            <li class={FetchApiSalariesClass}>
              <Link to="salaries" onClick={this.toggleCollapse.bind(this)}>Salaries</Link>
            </li>
          </ul>
          
        </div>

      </nav>

    );
  }
}
