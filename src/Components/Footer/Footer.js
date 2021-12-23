import {
  Container,
  Row,
  Nav,
  NavLink,
  Col,
  InputGroup,
  Button,
  Input,
} from "reactstrap";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer_section position-relative d-flex align-items-center">
      <Container className="">
        <Row className="">
          <Col className="col-4">
            <div href="/" className="footer_logo">
              C<span>o</span>dingF<span>o</span>rL<span>i</span>fe
            </div>
            <Nav vertical>
              <NavLink href="#" className="footer_link">
                About
              </NavLink>

              <NavLink href="#" className="footer_link">
                Home
              </NavLink>

              <NavLink href="#" className="footer_link">
                Universities
              </NavLink>

              <NavLink href="#" disabled className="footer_link">
                FAQ
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <div href="/" className="footer_logo">
              Stay connected...
            </div>
            <p className="mb-5">
              Join over 25000 people who received bi-weekly news from us!{" "}
            </p>
            <InputGroup>
              <Input type="email" className="footer_input" />
              <ReusableButton style={"footer_button"}>
                To the Right!
              </ReusableButton>
            </InputGroup>
          </Col>
        </Row>
        <p className="footer_copyright">&copy; Copyright 2021 </p>
      </Container>
    </footer>
  );
};

export default Footer;
