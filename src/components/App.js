import React, { useState } from "react";
import "../assets/css/App.css";

const studentsList = [
  "Aline",
  "Camila",
  "Denis",
  "Denison",
  "Fellype",
  "Guilherme",
  "Hector",
  "Juliana",
  "Laura",
  "Leonardo",
  "Patrick",
  "Rodrigo",
  "Tassia",
  "Thalía",
  "Vitor",
];

function App() {
  const [state, setState] = useState({
    students: [...studentsList],
    picked: "",
    isLoading: false,
  });

  const handleClick = (e) => {
    let randomIdx = Math.floor(Math.random() * state.students.length);

    setState({ ...state, isLoading: true, });
    setTimeout(() => {
      setState({
        ...state,
        picked: state.students[randomIdx],
      });
    }, 2000);
  };

  return (
    <div className="App">
      <h1 className="p-3">IronRandomizer</h1>
      <button className="btn my-5 px-5" onClick={handleClick}>
        GO!
      </button>
      <div className="result-box mt-5 d-flex flex-column align-items-center justify-content-center align-content-center">
        {state.isLoading ? (
          <div
            className="spinner-border text-light"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <h2 className="result">{state.picked}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
