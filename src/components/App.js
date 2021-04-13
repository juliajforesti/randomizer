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
import InstantList from "../routeComponents/InstantList";

function App() {
  const [cohort, setCohort] = useState({
    course: "",
    campus: "",
    startMonth: "",
    startYear: null,
    students: [""],
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
              path="/"
              render={() => <Home setSelected={setSelected} />}
            />
            <Route
              exact
              path="/add-cohort"
              render={() => <CohortAdd cohort={cohort} setCohort={setCohort} />}
            />
            <Route
              exact
              path="/custom-list"
              render={() => (
                <InstantList
                  cohort={cohort}
                  setCohort={setCohort}
                  setSelected={setSelected}
                />
              )}
            />

            <Route
              exact
              path="/cohort/:id"
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
              path="/cohort-edit/:id"
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
              path="/cohort-delete/:id"
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
              path="/random"
              render={() => <StudentRandomizer cohort={cohort} />}
            />
            <Route
              exact
              path="/pairs"
              render={() => <PairsGenerator cohort={cohort} />}
            />
            <Route
              exact
              path="/random-order"
              render={() => <RandomOrder cohort={cohort} />}
            />
            <Route exact path="/heads-or-tails" component={HeadsOrTails} />
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
