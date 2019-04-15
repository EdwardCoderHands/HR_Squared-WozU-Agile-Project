// Imports the necessary files
import React from "react";

// This is the React component that fetches and renders data from the 'Reviews' controller
export default class FetchApiReviews extends React.Component {
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
        fetch('http://localhost:5000/api/reviews')
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