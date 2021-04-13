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
          <Nav className="mr-auto">
            <LinkContainer to="/random" onClick={() => setExpanded(false)}>
              <Nav.Link>Randomizer</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/pairs" onClick={() => setExpanded(false)}>
              <Nav.Link>Random pairs</Nav.Link>
            </LinkContainer>

            <LinkContainer
              to="/random-order"
              onClick={() => setExpanded(false)}
            >
              <Nav.Link>Random order</Nav.Link>
            </LinkContainer>

            <LinkContainer
              to="/heads-or-tails"
              onClick={() => setExpanded(false)}
            >
              <Nav.Link>Coinflip</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to={`/cohort/${cohort._id}`}
              onClick={() => setExpanded(false)}
            >
              <Nav.Link>See cohort</Nav.Link>
            </LinkContainer>
          </Nav>
        ) : (
          <Nav className="mr-auto">
            <LinkContainer to="/add-cohort" onClick={() => setExpanded(false)}>
              <Nav.Link>Add cohort</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/custom-list" onClick={() => setExpanded(false)}>
              <Nav.Link>Custom list</Nav.Link>
            </LinkContainer>

            <LinkContainer
              to="/heads-or-tails"
              onClick={() => setExpanded(false)}
            >
              <Nav.Link>Coinflip</Nav.Link>
            </LinkContainer>

          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
