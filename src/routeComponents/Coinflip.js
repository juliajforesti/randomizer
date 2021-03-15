import React from "react";
import { useState } from "react";

const HeadsOrTails = () => {
  const [state, setState] = useState({
    flipped: false,
    flippingStyle: {},
    side: "",
  });

  const flippingStyle = {
    animationName: "flip_animation",
    animationDuration: "3s",
  };

  const sides = ["HEADS", "TAILS"];

  function handleFlipClick() {
    let randomSide = sides[Math.floor(Math.random() * 2)];
    setState({ ...state, flippingStyle: flippingStyle, flipped: false });
    setTimeout(() => {
      setState({ ...state, side: randomSide, flipped: true });
    }, 3000);
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <h1 className="pt-3">Heads or Tails</h1>
      <button className="btn btn-blue my-5" onClick={handleFlipClick}>
        GO!
      </button>
      {state.flipped ? (
        <div style={state.flippingStyle} className="flip-img coin ">
        <p className='coin-text'>{state.side}</p>
        </div>
      ) : (
        <div style={state.flippingStyle} className="flip-img coin">
        </div>
      )}
    </div>
  );
};

export default HeadsOrTails;
