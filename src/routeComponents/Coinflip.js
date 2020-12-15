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

  const imgPaths = ["./assets/images/heads.png", "./assets/images/tails.png"];

  function handleFlipClick() {
    let randomSide = imgPaths[Math.floor(Math.random() * 2)];
    setState({...state, flippingStyle: flippingStyle, flipped: false})
    setTimeout(() => {
      setState({ ...state, side: randomSide, flipped: true });
    }, 3000);
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <h1 className="pt-3">Heads or Tails</h1>
      <button className="btn my-5 px-5" onClick={handleFlipClick}>
        GO!
      </button>
      {state.flipped ? (
        <img className="w-25 flip-img" src={state.side} alt="" />
      ) : (
        <img
          className="w-25 flip-img"
          src="./assets/images/hexagon.png"
          alt=""
          style={state.flippingStyle}
        />
      )}
    </div>
  );
};

export default HeadsOrTails;
