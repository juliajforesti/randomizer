import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import "../assets/css/App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PairsGenerator from "./PairsGenerator";
import RandomOrder from "./RandomOrder";
import StudentRandomizer from "./StudentRandomizer";

function App() {
  return(
    <div className='App'>
    <BrowserRouter>
      <Navbar />
      <Route path='/random' component={StudentRandomizer} />
      <Route path='/pairs' component={PairsGenerator} />
      <Route path='/random-order' component={RandomOrder} />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
