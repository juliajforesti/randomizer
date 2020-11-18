import React, {useEffect, useState} from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import "../assets/css/App.css";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import PairsGenerator from "./PairsGenerator";
import RandomOrder from "./RandomOrder";
import StudentRandomizer from "./StudentRandomizer";
import HeadsOrTails from "./HeadsOrTails";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log(students)
  }, [students]);
  
  return(
    <div className='App'>
    <BrowserRouter>
      <Navbar />
      <Route exact path='/randomizer' render={() => <Home students={students} setStudents={setStudents} />} />
      <Route exact path='/randomizer/random' render={() => <StudentRandomizer students={students} />} /> 
      <Route exact path='/randomizer/pairs' render={() => <PairsGenerator students={students}/>} /> 
      <Route exact path='/randomizer/random-order' render={() => <RandomOrder students={students}/>} /> 
      <Route exact path='/randomizer/heads-or-tails' component={HeadsOrTails} />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
