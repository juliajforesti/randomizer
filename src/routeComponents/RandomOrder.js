import React, { useState } from "react";
import {randomizeArray} from "react-randomizer";


const RandomOrder = (props) => {
  const [state, setState] = useState({
    students: [""],
    isLoading: false,
  });
  

  const handleClick = (e) => {
    setState({ ...state, isLoading: true });
    setTimeout(() => {
      setState({
        ...state,
        isLoading: false,
        students: randomizeArray([...props.cohort.students]),
      });
    }, 1000);
  };

  return (
    <div className="App">
      <h1 className="pt-3">Random Order</h1>
      <button className="btn btn-blue my-3 " onClick={handleClick}>
        GO!
      </button>
      <div className="d-flex flex-column align-items-center justify-content-center align-content-center">
        {state.isLoading ? (
          <div
            className="spinner-border text-light"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="students-list d-flex flex-column flex-wrap">
            {state.students.map((student, i, arr) =>
              arr.length === 1 ? (
                <div key={i}></div>
              ) : (
                <p key={i} className='pl-5 text-capitalize'>
                  <strong>{i + 1}. </strong> {student}
                </p>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomOrder;
