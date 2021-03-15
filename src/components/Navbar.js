import React from "react";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

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
        <Link className="navbar-brand text-light" to="/">
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
              <LinkContainer to="/random" onClick={() => setExpanded(false)}>
                <Nav.Link>Randomizer</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/pairs" onClick={() => setExpanded(false)}>
                <Nav.Link>Random pairs</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/random-order" onClick={() => setExpanded(false)}>
                <Nav.Link>Random order</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/heads-or-tails" onClick={() => setExpanded(false)}>
                <Nav.Link>Coinflip</Nav.Link>
              </LinkContainer>
            </Nav>
            
            <Nav>
              <LinkContainer to={`/cohort/${cohort._id}`} onClick={() => setExpanded(false)}>
                <Nav.Link>See cohort</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/add-cohort" onClick={() => setExpanded(false)}>
                <Nav.Link>Add cohort</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/custom-list" onClick={() => setExpanded(false)}>
                <Nav.Link>Custom List</Nav.Link>
              </LinkContainer>

            </Nav>
          </>
        ) : (
          <Nav>
            {cohort ? (
              <>
                <Nav.Link>
                  <Link to="/random" onClick={() => setExpanded(false)}>
                    Randomizer
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/pairs" onClick={() => setExpanded(false)}>
                    Random pairs
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/random-order" onClick={() => setExpanded(false)}>
                    Random order
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <></>
            )}
            <Nav.Link>
              <Link to="/add-cohort" onClick={() => setExpanded(false)}>
                Add cohort
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/custom-list" onClick={() => setExpanded(false)}>
                Instant List
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/heads-or-tails" onClick={() => setExpanded(false)}>
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
