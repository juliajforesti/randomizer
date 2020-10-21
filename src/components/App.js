import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import "../assets/css/App.css";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import PairsGenerator from "./PairsGenerator";
import RandomOrder from "./RandomOrder";
import StudentRandomizer from "./StudentRandomizer";

function App() {
  return(
    <div className='App'>
    <BrowserRouter>
      <Navbar />
      <Route exact path='/randomizer' component={Home} />
      <Route exact path='/randomizer/random' component={StudentRandomizer} />
      <Route exact path='/randomizer/pairs' component={PairsGenerator} />
      <Route exact path='/randomizer/random-order' component={RandomOrder} />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
