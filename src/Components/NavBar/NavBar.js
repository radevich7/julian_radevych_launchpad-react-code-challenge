import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import "./index.css";
// Components
import ReusableButton from "../../ReusableComponents/ReusableButton";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  // Scroll effect for NAV BAR
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`pt-4 pb-4 ${scroll ? "navbar_onScroll " : ""}`}
      light
      container={"xl"}
    >
      <NavbarBrand href="/" className="company_logo">
        C<span>o</span>dingF<span>o</span>rL<span>i</span>fe
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar className="flex-grow-0">
        <Nav className="me-auto align-items-center" navbar>
          <NavItem>
            <a href="/components/" className="nav_link about_link">
              About
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav_link">
              Home
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav_link">
              Universities
            </a>
          </NavItem>
          <NavItem>
            <ReusableButton href="#" className="nav_link">
              Postal Lookup
            </ReusableButton>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
