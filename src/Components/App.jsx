import React, { Component } from 'react';
import { Route } from 'react-router-dom'

//Local Imports
import {Navigation} from "./Navigation.jsx"
import {Home} from "./Home.jsx"
import {About} from "./About.jsx"
import {Contact} from "./Contact.jsx"
import {Footer} from "./Footer.jsx"

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
