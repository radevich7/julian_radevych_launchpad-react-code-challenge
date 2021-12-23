import "./index.css";
import {
  Container,
  Row,
  DropdownToggle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import CapAnimation from "../../animation/CapAnimation";
import { useState } from "react/cjs/react.development";
import Hamburger from "../../assets/svg/Hamburger";
const Universities = () => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);
  return (
    <Container className="container-xl pt-5 ">
      <CapAnimation />
      <Row className="d-flex position-relative " style={{ width: "100%" }}>
        <div className="students_img"> </div>
      </Row>

      <Row className="dropdown_section d-flex justify-content-center p-5">
        <Dropdown direction="end" toggle={toggle} isOpen={open}>
          <DropdownToggle className="button_main dropdown_button">
            Choose country
            {/* Hamburger svg */}
            <Hamburger open={open} />
          </DropdownToggle>
          <DropdownMenu end flip={false}>
            <DropdownItem>Canada</DropdownItem>
            <DropdownItem>Ukraine</DropdownItem>
            <DropdownItem>USA</DropdownItem>
            <DropdownItem>Mexico</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Row>
    </Container>
  );
};

export default Universities;
