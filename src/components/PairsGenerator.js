import React, { useState } from "react";

const PairsGenerator = () => {
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

  const [state, setState] = useState({ pairs: [], isLoading: false });

  const shuffleArr = (arr) => {
    let i = arr.length;
    let j = 0;
    let temp = "";
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
        pairs: shuffleArr([...studentsList]),
      });
    }, 3000);
  };

  return (
    <div className="App">
      <h1 className="pt-3">Pairs Generator</h1>

      <button className="btn my-5 px-5" onClick={handleClick}>
        GO!
      </button>

      <div className="d-flex flex-column align-items-center justify-content-center">
        {state.isLoading ? (
          <div
            className="spinner-border text-light"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="students-list d-flex flex-column flex-wrap align-content-center justify-content-center">
            <div>
              {state.pairs
                .filter((pair, i) => i % 2 === 0)
                .map((pair, i) => (
                  <p key={i} >
                    {i + 1}. {pair},
                  </p>
                ))}
            </div>
            <div >
              {state.pairs
                .filter((pair, i) => i % 2 !== 0)
                .map((pair, i) => (
                  <p key={i}>{pair}</p>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PairsGenerator;
