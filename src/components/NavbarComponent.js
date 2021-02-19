import React from "react";
import { useState } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const { cohort } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="md"
      className="nav-color"
      variant="dark"
    >
      <Navbar.Brand>
        <Link className="navbar-brand text-light" to="/randomizer">
          Home
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        {cohort ? (
          <>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  to="/randomizer/random"
                  onClick={() => setExpanded(false)}
                >
                  Randomizer
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/randomizer/pairs" onClick={() => setExpanded(false)}>
                  Random pairs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/randomizer/random-order"
                  onClick={() => setExpanded(false)}
                >
                  Random order
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/randomizer/heads-or-tails"
                  onClick={() => setExpanded(false)}
                >
                  Coinflip
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link
                  to={`/randomizer/cohort/${cohort._id}`}
                  onClick={() => setExpanded(false)}
                >
                  See cohort
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/randomizer/add-cohort"
                  onClick={() => setExpanded(false)}
                >
                  Add cohort
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/randomizer/instant-list"
                  onClick={() => setExpanded(false)}
                >
                  Instant List
                </Link>
              </Nav.Link>
            </Nav>
          </>
        ) : (
          <Nav>
            {cohort ? (
              <>
                <Nav.Link>
                  <Link
                    to="/randomizer/random"
                    onClick={() => setExpanded(false)}
                  >
                    Randomizer
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/randomizer/pairs"
                    onClick={() => setExpanded(false)}
                  >
                    Random pairs
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/randomizer/random-order"
                    onClick={() => setExpanded(false)}
                  >
                    Random order
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <></>
            )}
            <Nav.Link>
              <Link
                to="/randomizer/add-cohort"
                onClick={() => setExpanded(false)}
              >
                Add cohort
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/randomizer/instant-list"
                onClick={() => setExpanded(false)}
              >
                Instant List
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/randomizer/heads-or-tails"
                onClick={() => setExpanded(false)}
              >
                Coinflip
              </Link>
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
