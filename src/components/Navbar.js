import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { cohort } = props;

  const [selected, setSelected] = useState("home");

  function handleClick(e) {
    setSelected(e.target.name);
    console.log(selected);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100 overflow-auto">
      <Link
        name="home"
        className="navbar-brand text-light"
        to="/randomizer"
        onClick={handleClick}
      >
        Home
      </Link>
      <button
        className="navbar-toggler text-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {cohort ? (
            <>
              {/* <Link
                name="select-cohort"
                className={`nav-item  nav-link ${
                  selected === "select-cohort" ? "active-link" : ""
                }`}
                to="/randomizer"
                onClick={handleClick}
              >
                Select cohort
              </Link> */}
              <Link
                name="randomizer"
                className={`nav-item  nav-link ${
                  selected === "randomizer" ? "active-link" : ""
                }`}
                to="/randomizer/random"
                onClick={handleClick}
              >
                Randomizer
              </Link>
              <Link
                name="pairs"
                className={`nav-item  nav-link ${
                  selected === "pairs" ? "active-link" : ""
                }`}
                to="/randomizer/pairs"
                onClick={handleClick}
              >
                Pairs Generator
              </Link>
              <Link
                name="order"
                className={`nav-item  nav-link ${
                  selected === "order" ? "active-link" : ""
                }`}
                to="/randomizer/random-order"
                onClick={handleClick}
              >
                Random Order
              </Link>
              <Link
                name="coin"
                className={`nav-item  nav-link ${
                  selected === "coin" ? "active-link" : ""
                }`}
                to="/randomizer/heads-or-tails"
                onClick={handleClick}
              >
                CoinFlip
              </Link>
              <Link
                name="see-cohort"
                className={`nav-item  nav-link ${
                  selected === "see-cohort" ? "active-link" : ""
                }`}
                to={`/randomizer/cohort/${cohort._id}`}
                onClick={handleClick}
              >
                See cohort <span className="sr-only">(current)</span>
              </Link>
              <Link
                name="add-cohort"
                className={`nav-item  nav-link ${
                  selected === "add-cohort" ? "active-link" : ""
                }`}
                to="/randomizer/add-cohort"
                onClick={handleClick}
              >
                Add cohort
              </Link>
            </>
          ) : (
            <>
              {/* <Link
                name="select-cohort"
                className={`nav-item  nav-link ${
                  selected === "select-cohort" ? "active-link" : ""
                }`}
                to="/randomizer"
                onClick={handleClick}
              >
                Select cohort
              </Link> */}
              <Link
                name="add-cohort"
                className={`nav-item  nav-link ${
                  selected === "add-cohort" ? "active-link" : ""
                }`}
                to="/randomizer/add-cohort"
                onClick={handleClick}
              >
                Add cohort
              </Link>
              <Link
                name="coin"
                className={`nav-item  nav-link ${
                  selected === "coin" ? "active-link" : ""
                }`}
                to="/randomizer/heads-or-tails"
                onClick={handleClick}
              >
                Heads or Tails
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
