import React, { useEffect, useState } from "react";
import "./App.css";

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
    console.log("handleclick called");
    const randomIdx = Math.floor(Math.random() * state.students.length);
    console.log(randomIdx);
    setState({ ...state, isLoading: true });
    setTimeout(() => {
      setState({
        ...state,
        picked: state.students[randomIdx],
      });
    }, 2000);
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="App">
      <h1 className="p-5">IronRandomizer</h1>
      <button className="btn my-5 px-5" onClick={handleClick}>
        GO!
      </button>
      <div className="mt-5 d-flex flex-column align-items-center justify-items-center">
        {state.isLoading ? (
          <div className="spinner-border text-light" style={{width: "5rem", height: "5rem"}} role="status">
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
