import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/css/App.css";
import "../assets/css/styles.css";
import Footer from "./Footer";
import Home from "../routeComponents/Home";
import Navbar from "./Navbar";
import PairsGenerator from "../routeComponents/PairsGenerator";
import RandomOrder from "../routeComponents/RandomOrder";
import StudentRandomizer from "../routeComponents/StudentRandomizer";
import HeadsOrTails from "../routeComponents/Coinflip";
import AddCohort from "../routeComponents/AddCohort";
import CohortDetails from "../routeComponents/CohortDetails";

function App() {
  const [cohort, setCohort] = useState({});

  return (
    <div className="App pt-3">
      <BrowserRouter>
        <div className="d-flex bg-dark-blue">
          <Navbar cohort={cohort} setCohort={setCohort} />
          <div className="w-100">
            <Route
              exact
              path="/randomizer"
              render={() => <Home cohort={cohort} setCohort={setCohort} />}
            />
            <Route
              exact
              path="/randomizer/add-cohort"
              render={() => <AddCohort cohort={cohort} setCohort={setCohort} />}
            />
            <Route
              exact
              path="/randomizer/cohort/:id"
              render={(routeProps) => (
                <CohortDetails
                  {...routeProps}
                  cohort={cohort}
                  setCohort={setCohort}
                />
              )}
            />
            <Route
              exact
              path="/randomizer/random"
              render={() => <StudentRandomizer cohort={cohort} />}
            />
            <Route
              exact
              path="/randomizer/pairs"
              render={() => <PairsGenerator cohort={cohort} />}
            />
            <Route
              exact
              path="/randomizer/random-order"
              render={() => <RandomOrder cohort={cohort} />}
            />
            <Route
              exact
              path="/randomizer/heads-or-tails"
              component={HeadsOrTails}
            />
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
