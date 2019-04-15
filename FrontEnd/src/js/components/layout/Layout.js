// Imports the necessary files
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

// Creates a class for displaying the page Layout
export default class Layout extends React.Component {

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "65px"
    };
    
    return (

      <div>
        
        <Nav location={location} />

          <div class="container" style={containerStyle}>

            <h1>HR Squared</h1>
            <h3>Thinking inside the box!</h3>
            <h1>{this.props.children}</h1>
           
            <Footer/>

          </div>

      </ div>
      
    );
  }
}



