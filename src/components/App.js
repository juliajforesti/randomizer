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
import CohortAdd from "../routeComponents/CohortAdd";
import CohortDetails from "../routeComponents/CohortDetails";
import CohortEdit from "../routeComponents/CohortEdit";
import CohortDelete from "../routeComponents/CohortDelete";

function App() {
  const [cohort, setCohort] = useState({
    course: "",
    campus: "",
    startMonth: "",
    startYear: null,
    students: [''],
  });
  const [selected, setSelected] = useState({});

  let storage = JSON.parse(localStorage.getItem("selectedCohort"));

  useEffect(() => {
    setCohort(storage);
  }, [selected]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-dark-blue">
          <Navbar cohort={cohort} />
          <div className="w-100 main-box">
            <Route
              exact
              path="/randomizer"
              render={() => <Home setSelected={setSelected} />}
            />
            <Route
              exact
              path="/randomizer/add-cohort"
              render={() => <CohortAdd cohort={cohort} setCohort={setCohort} />}
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
              path="/randomizer/cohort-edit/:id"
              render={(routeProps) => (
                <CohortEdit
                  {...routeProps}
                  cohort={cohort}
                  setCohort={setCohort}
                  setSelected={setSelected}
                />
              )}
            />
            <Route
              exact
              path="/randomizer/cohort-delete/:id"
              render={(routeProps) => (
                <CohortDelete
                  {...routeProps}
                  cohort={cohort}
                  setCohort={setCohort}
                  setSelected={setSelected}
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
