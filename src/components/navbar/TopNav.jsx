import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import {CastForEducation} from "@mui/icons-material/Delete";


function Var(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        {/* <svg data-testid=" CastForEducation"></svg> */}

        <NavbarBrand href="/" className="me-auto">
          From Cero to Hero{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
              <p>
                We are three girls that just finished a Frontend bootcamp and
                thought for our last proyect would be nice to compile all the
                resourses that we have used.
              </p>
            </NavItem>

            <NavItem>
              <NavLink href="https://raqueldelcastillo.github.io/beanOpedia/">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Resources</NavLink>
              <p>Take to the cards with the information</p>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Var;
