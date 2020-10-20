import React, { useState } from "react";

const RandomOrder = () => {
  const studentsList = [
    "Aline",
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

  const [state, setState] = useState({
    students: [""],
    isLoading: false,
  });
  const shuffleArr = (arr) => {
    let i = arr.length
    let j = 0
    let temp = ''
    if (i === 0) return arr;
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const handleClick = (e) => {
    setState({ ...state, isLoading: true });
    setTimeout(() => {
      setState({
        ...state,
        isLoading: false,
        students: shuffleArr([...studentsList]),
      });
    }, 3000);
  };

  return (
    <div className="App">
      <h1 className="pt-3">Random Order</h1>
      <button className="btn my-5 px-5" onClick={handleClick}>
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
                <p key={i} className='pl-5'>
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
