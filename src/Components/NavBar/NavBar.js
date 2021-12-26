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

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  // Scroll effect for NAV BAR
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });
  }, []);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };
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
            <Link to="/" className="nav_link">
              Posts
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/universities" className="nav_link">
              Universities
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/postal" className="button_main">
              Postal Lookup
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
