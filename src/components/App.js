import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import "../assets/css/App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StudentRandomizer from "./StudentRandomizer";

function App() {
  return(
    <div className='App'>
    <BrowserRouter>
      <Navbar />
      <Route path='/random' component={StudentRandomizer} />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
