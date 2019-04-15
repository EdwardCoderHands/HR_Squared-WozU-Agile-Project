// Imports the necessary files
import React from "react";

// This is the React component that fetches and renders data from the 'Salaries' controller
export default class FetchApiSalaries extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.getItems();
    }
  
    getItems() {                        
        fetch('http://localhost:5000/api/salaries')
        .then(results => results.json())
        .then(results => this.setState({items : results}));
    }                  
  
    render() {
      return (
        <div>
          <h2>{this.state.items}</h2>
        </div>
        
        );
    }
}
 