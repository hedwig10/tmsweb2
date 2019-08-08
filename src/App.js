import React, { Component } from 'react';

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Example from "./components/Youtube"
import Gomapsapi from "./components/Gomapsapi"

class App extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <Gomapsapi />
        <Main />        
        <Example />
        <Footer />
      </div>
    );
  }
}

export default App;
