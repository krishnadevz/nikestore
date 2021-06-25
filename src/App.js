import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";

class App extends React.Component {
  render() {
    return(
     <div className="app">
     
     <Router>
       <Header/>
       <Section />
     </Router>
     
     
     </div>
  
    );
  }
}

export default App;
