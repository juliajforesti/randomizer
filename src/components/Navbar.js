import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { cohort } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <Link className="navbar-brand text-light" to='/randomizer'>
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
              <Link
                className="nav-item text-light nav-link active"
                to={`/randomizer/cohort/${cohort._id}`}
              >
                See cohort <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item text-light nav-link" to="/randomizer">
                Select another cohort
              </Link>
              <Link
                className="nav-item text-light nav-link"
                to="/randomizer/random"
              >
                Randomizer
              </Link>
              <Link
                className="nav-item text-light nav-link"
                to="/randomizer/pairs"
              >
                Pairs Generator
              </Link>
              <Link
                className="nav-item text-light nav-link"
                to="/randomizer/random-order"
              >
                Random Order
              </Link>
              <Link
                className="nav-item text-light nav-link"
                to="/randomizer/heads-or-tails"
              >
                Heads or Tails
              </Link>
              <Link
                className="nav-item text-light nav-link"
                to="/randomizer/add-cohort"
              >
                Add cohort
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-item text-light nav-link" to="/randomizer">
                Select cohort
              </Link>
              <Link
                className="nav-item text-light nav-link"
                to="/randomizer/add-cohort"
              >
                Add cohort
              </Link>
              <Link
                className="nav-item text-light nav-link"
                to="/randomizer/heads-or-tails"
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
