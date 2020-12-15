import React, { useState } from "react";
import { useEffect } from "react";
import {randomizeArray} from "react-randomizer";


const PairsGenerator = (props) => {

  const [state, setState] = useState({pairs: [], isLoading: false });

  const handleClick = (e) => {
    setState({ ...state, isLoading: true });
    let randomOrder = randomizeArray([...props.cohort.students])

    let pairsArr = randomOrder.reduce((acc, cv, idx, arr) => {
      if (idx % 2 === 0)
        acc.push(arr.slice(idx, idx + 2));
      return acc;
    }, []);

    setTimeout(() => {
      setState({
        ...state,
        isLoading: false,
        pairs: pairsArr,
      });
    }, 1000);
  };

  useEffect(() => {
    console.log(state.pairs)
    
  }, [state.pairs]);

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
                .map((pair, i) => (
                  pair.length === 2 ? (
                    <p key={i} >
                      {i + 1}. {pair[0]} e {pair[1]},
                    </p>
                  ) : (
                    <p key={i} >
                      {i + 1}. {pair[0]}
                    </p>
                  )
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PairsGenerator;
